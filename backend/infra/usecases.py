from dataclasses import dataclass, asdict
from typing import BinaryIO

from asyncpg.pgproto.pgproto import UUID

from core.models import Theme
from infra.s3 import S3FileStorage
from infra.database import SqlThemeRepo


@dataclass
class CreateThemeDto:
    name: str
    description: str
    lection_id: str | None = None
    test_id: str | None = None


@dataclass
class CreateThemeCommad:
    theme_repo: SqlThemeRepo
    file_repo: S3FileStorage

    async def __call__(self, dto: CreateThemeDto) -> str:
        identity = self.theme_repo.new_id()
        theme = Theme(identity, dto.name, dto.description, dto.lection_id, dto.test_id)
        await self.theme_repo.add(theme)
        return identity


@dataclass(frozen=True)
class CreateImageDto:
    filename: str
    content_type: str
    file: BinaryIO
    size: int


@dataclass(frozen=True)
class CreateFileCommand:
    storage: S3FileStorage

    async def __call__(self, dto: CreateImageDto) -> str:
        return await self.storage.upload(dto.filename, dto.file, dto.size)


def list_response(items):
    res = []
    for i in items:
        item = asdict(i)
        for k, v in item.items():
            if isinstance(item[k], UUID):
                item[k] = str(item[k])
        res.append(item)
    return {"items": res}
        
        
        