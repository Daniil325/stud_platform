from dataclasses import dataclass
from datetime import datetime
import os
from pathlib import Path
import re
from typing import AsyncGenerator, BinaryIO

import imgspy
import aiohttp
from pydantic import BaseModel
from miniopy_async import Minio, S3Error

from core.protocols import ImageStorage


class S3StorageSettings(BaseModel):
    endpoint: str = "http://localhost:9001"
    bucket_name: str = 'content-images'
    access_key: str | None = "ePTeT7tQkE7xAHz0CMlc"
    secret_key: str | None = "CM6r6PQP2Q4nWHch3QxW4TedtTDcak9d94Vt7OG0"
    session_token: str | None = None
    secure: bool = True
    region: str | None = None


_filename_ascii_strip_re = re.compile(r"[^A-Za-z0-9_.-]")


def secure_filename(filename: str) -> str:
    """
    From Werkzeug secure_filename.
    """

    for sep in os.path.sep, os.path.altsep:
        if sep:
            filename = filename.replace(sep, " ")

    normalized_filename = _filename_ascii_strip_re.sub("", "_".join(filename.split()))
    filename = str(normalized_filename).strip("._")
    return filename


@dataclass(frozen=True)
class ImageInfo:
    content_type: str


@dataclass(frozen=True)
class ImageDescr(ImageInfo):
    name: str
    url: str
    size: int
    created_at: datetime


class S3FileStorage(ImageStorage):
    base_image_url = '/media/'

    def __init__(self, settings: S3StorageSettings, session: aiohttp.ClientSession):
        self.client = Minio(**settings.model_dump(exclude={'bucket_name'}))
        self.bucket_name = settings.bucket_name
        self._session = session

    async def list(self,
                   prefix: str | None = None,
                   start_after: str | None = None) -> AsyncGenerator[ImageDescr, None]:
        for obj in await self.client.list_objects(self.bucket_name,
                                                  prefix=prefix,
                                                  start_after=start_after,
                                                  include_user_meta=True):
            yield self._create_image_descr(obj)

    async def get(self, image_id: str) -> ImageDescr:
        try:
            return self._create_image_descr(await self.client.stat_object(self.bucket_name, image_id))
        except S3Error as e:
            if e.code == 'NoSuchKey':
                raise f'Image {image_id} not found in storage'
            raise

    def _create_image_descr(self, obj) -> ImageDescr:
        return ImageDescr(
            name=obj.object_name,
            content_type=obj.metadata['content-type'],
            url=f'{self.base_image_url}{self.bucket_name}/{obj.object_name}',
            size=obj.size,
            created_at=obj.last_modified
        )

    async def exists(self, image_id: str) -> bool:
        try:
            return bool(await self.client.stat_object(self.bucket_name, image_id))
        except S3Error as e:
            if e.code == 'NoSuchKey':
                return False
            raise

    async def upload(self, filename: str, file: BinaryIO, size: int | None = None) -> str:
        identity = await self.create_new_id(filename)
        if not size:
            size = self._get_file_size(file)
        await self.client.put_object(self.bucket_name, identity, file, length=size)
        return identity

    @staticmethod
    def _get_file_size(file: BinaryIO) -> int:
        file.seek(0, os.SEEK_END)
        size = file.tell()
        file.seek(0, os.SEEK_SET)
        return size

    @staticmethod
    def _get_image_info(file: BinaryIO) -> ImageInfo:
        info = imgspy.info(file)
        file.seek(0, os.SEEK_SET)
        type = {'jpg': 'jpeg'}.get(info['type'], info['type'])
        return ImageInfo(content_type=f'image/{type}', width=info['width'], height=info['height'])

    @staticmethod
    def _get_file_info(file: BinaryIO):
        ...

    async def download(self, image_id: str) -> bytes:
        response = await self.client.get_object(self.bucket_name, image_id, self._session)
        return await response.read()

    async def create_new_id(self, filename: str) -> str:
        identity = secure_filename(filename)
        stem = Path(identity).stem
        suffix = Path(identity).suffix
        counter = 0

        while await self.exists(identity):
            counter += 1
            identity = f"{stem}-{counter}{suffix}"

        return identity
