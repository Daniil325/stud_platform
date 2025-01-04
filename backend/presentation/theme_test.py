from fastapi import APIRouter, UploadFile
from dishka.integrations.fastapi import FromDishka, DishkaRoute

from infra.database import SqlThemeTestRepo


router = APIRouter(route_class=DishkaRoute)


@router.get("/{id}")
async def get_test(id: str, repo: FromDishka[SqlThemeTestRepo]):
    res = repo.get_by_id(id)
    return {"item": res}


@router.post("/")
async def post_test(cmd: )