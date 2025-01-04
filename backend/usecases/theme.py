from dataclasses import dataclass

from core.models import Theme
from infra.database import SqlThemeRepo
from infra.s3 import S3FileStorage


@dataclass
class CreateThemeDto:
    name: str
    description: str
    lection_id: str | None = None
    test_id: str | None = None


@dataclass
class CreateThemeCommand:
    theme_repo: SqlThemeRepo
    file_repo: S3FileStorage

    async def __call__(self, dto: CreateThemeDto) -> str:
        identity = self.theme_repo.new_id()
        theme = Theme(identity, dto.name, dto.description, dto.lection_id, dto.test_id)
        await self.theme_repo.add(theme)
        return identity