from typing import AsyncIterator
import aiohttp
from dishka import Provider, Scope, alias, provide
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker

from core.protocols import ImageStorage
from infra.s3 import S3FileStorage
from infra.database import SqlThemeRepo


class SqlRepoProvider(Provider):
    scope = Scope.REQUEST

    def __init__(self, session: AsyncSession) -> None:
        super().__init__()
        self.session = session()

    async def async_db_session():
        dsn = "postgresql+asyncpg://postgres:123@localhost:5432/stud_platform"
        engine = create_async_engine(
            dsn, echo=False, pool_pre_ping=True, pool_recycle=3600
        )
        yield sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)
        await engine.dispose()

    @provide
    def get_thepe_repo(self) -> SqlThemeRepo:
        return SqlThemeRepo(self.session)


class S3StorageSettings(BaseModel):
    endpoint: str | None = "localhost:9000"
    bucket_name: str = "content-images"
    access_key: str | None = "ePTeT7tQkE7xAHz0CMlc"
    secret_key: str | None = "CM6r6PQP2Q4nWHch3QxW4TedtTDcak9d94Vt7OG0"
    session_token: str | None = None
    secure: bool = False
    region: str | None = None


class AdaptersProvider(Provider):
    scope = Scope.APP

    def __init__(self):
        super().__init__()

    @provide
    async def get_storage(self) -> AsyncIterator[S3FileStorage]:
        async with aiohttp.ClientSession() as session:
            sett = S3StorageSettings()
            yield S3FileStorage(sett, session)

    image_storage = alias(source=S3FileStorage, provides=ImageStorage)
