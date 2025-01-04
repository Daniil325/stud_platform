from dataclasses import dataclass
from typing import BinaryIO

from infra.s3 import S3FileStorage


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
