from dataclasses import asdict

from fastapi import APIRouter, UploadFile
from dishka.integrations.fastapi import FromDishka, DishkaRoute
from pydantic import BaseModel, Field

from infra.s3 import ImageDescr, S3FileStorage
from infra.usecases import (
    CreateFileCommand,
    CreateImageDto,
    CreateThemeCommad,
    list_response,
    CreateThemeDto,
)
from presentation.base import APIModelConfig, ApiInputModelConfig
from infra.database import SqlThemeRepo


router = APIRouter(route_class=DishkaRoute)


class ThemeListResponse(BaseModel):
    model_config = APIModelConfig


@router.get("/")
async def get_all_themes(repo: FromDishka[SqlThemeRepo]):
    res = await repo.get_all()
    for i in res:
        print(asdict(i))
    items = list_response(res)
    return items


class CreateTheme(BaseModel):
    model_config = ApiInputModelConfig
    name: str
    description: str
    lection_id: str
    test_id: str


@router.post("/")
async def post_theme(theme: CreateTheme, cmd: FromDishka[CreateThemeCommad]):
    print(theme)
    identity = await cmd(
        CreateThemeDto(
            name=theme.name,
            description=theme.description,
            lection_id=theme.lection_id,
            test_id=theme.test_id,
        )
    )
    return {"item": identity}


@router.post("/image")
async def upload_image(
    image: UploadFile,
    storage: FromDishka[S3FileStorage],
    cmd: FromDishka[CreateFileCommand],
):
    image_id = await cmd(
        CreateImageDto(
            filename=image.filename,
            content_type=image.content_type,
            file=image.file,
            size=image.size,
        )
    )
    return await storage.get(image_id)
