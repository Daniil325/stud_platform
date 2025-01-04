import logging
from contextlib import asynccontextmanager

from dishka import make_async_container
from dishka.integrations.fastapi import setup_dishka
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from usecases import CommandsProvider
from infra.mapping import SqlAlchemyDB
from infra.di import AdaptersProvider, SqlRepoProvider
from presentation import api_router


logger = logging.getLogger(__name__)


def build_container():
    return make_async_container(
        SqlAlchemyDB().sessionmaker
    )


@asynccontextmanager
async def lifespan(app: FastAPI):
    container = await build_container()
    app.state.container = container
    yield
    await app.state.dishka_container.close()


def base_create_app():
    app = FastAPI()
    app.include_router(api_router)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=['http://localhost:3000'],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    container = build_container()
    return container, app


def create_app():
    
    app: FastAPI = FastAPI()
    app.include_router(api_router)
    app.add_middleware(
        CORSMiddleware,
        allow_origins=['http://localhost:3000'],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.state.db = SqlAlchemyDB()
    container = make_async_container(
        SqlRepoProvider(app.state.db.sessionmaker),
        CommandsProvider(),
        AdaptersProvider()
    )
    setup_dishka(container, app)
    return app
