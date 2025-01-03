from fastapi import APIRouter

from .theme import router as theme_router

api_router = APIRouter()
api_router.include_router(theme_router, prefix="/theme", tags=['theme'])