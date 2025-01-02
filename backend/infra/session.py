from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import Session, sessionmaker


async def async_db_session():
    dsn = "postgresql+asyncpg://postgres:123@localhost:5432/stud_platform"
    engine = create_async_engine(f'mysql+aiomysql://{dsn}', echo=False, pool_pre_ping=True, pool_recycle=3600)
    yield sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)
    await engine.dispose()
    
    
def db_session() -> Session:
    dsn = "postgresql+asyncpg://postgres:123@localhost:5432/stud_platform"
    engine = create_engine(f'mysql+pymysql://{dsn}', echo=False, future=True)
    return Session(engine, future=True)

