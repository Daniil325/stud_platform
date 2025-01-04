from typing import List
import uuid
from sqlalchemy import (
    JSON,
    Boolean,
    Column,
    ForeignKey,
    Integer,
    String,
    Table,
    Uuid,
    select,
)
from sqlalchemy.orm import registry, sessionmaker, relationship
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from core.protocols import ThemeRepo
from core.models import (
    Answer,
    Question,
    User,
    ResultTest,
    UploadedPhoto,
    QuestionType,
    Theme,
    ThemeTest,
)


class SqlAlchemyDB:

    def __init__(self, readonly: bool = False):
        engine = create_async_engine(
            "postgresql+asyncpg://postgres:123@localhost:5432/stud_platform", echo=True
        )
        # Not use transaction for read-only connections
        self.engine = (
            engine.execution_options(isolation_level="AUTOCOMMIT")
            if readonly
            else engine
        )
        self.sessionmaker = sessionmaker(
            self.engine, expire_on_commit=False, class_=AsyncSession
        )

    async def close(self):
        await self.engine.dispose()


class SqlRepo:

    def __init__(self, session: AsyncSession) -> None:
        self.session = session

    @staticmethod
    def new_id() -> str:
        return uuid.uuid5()


mapper_reg = registry()
metadata = mapper_reg.metadata

theme_test_table = Table(
    "theme_test",
    metadata,
    Column("id", Uuid, primary_key=True),
    Column("name", String, nullable=False),
    Column("min_score", Integer, nullable=False),
    Column("time_limit", Integer, nullable=False),
)

theme_table = Table(
    "theme",
    metadata,
    Column("id", Uuid, primary_key=True),
    Column("name", String, nullable=False),
    Column("description", String, nullable=False),
    Column("lection_id", String),
    Column("test_id", Uuid, ForeignKey("theme_test.id")),
)

question_type_table = Table(
    "question_type",
    metadata,
    Column("id", Uuid, primary_key=True),
    Column("name", String, nullable=False),
)

question_table = Table(
    "question",
    metadata,
    Column("id", Uuid, primary_key=True),
    Column("name", String, nullable=False),
    Column("test_id", Uuid, ForeignKey("theme_test.id"), nullable=False),
    Column("type_id", Uuid, ForeignKey("question_type.id"), nullable=False),
)

answer_table = Table(
    "answer",
    metadata,
    Column("id", Uuid, primary_key=True),
    Column("text", String, nullable=False),
    Column("is_right", Boolean, nullable=False),
    Column("cost", Integer, nullable=False),
    Column("question_id", Uuid, ForeignKey("question.id"), nullable=False),
)

user_table = Table(
    "user",
    metadata,
    Column("id", Uuid, primary_key=True),
    Column("username", String, nullable=False),
    Column("password", String, nullable=False),
)

result_test_table = Table(
    "result_test",
    metadata,
    Column("id", Uuid, primary_key=True),
    Column("user_id", Uuid, ForeignKey("user.id"), nullable=False),
    Column("test_id", Uuid, ForeignKey("theme_test.id"), nullable=False),
)

uploaded_photo_table = Table(
    "uploaded_file",
    metadata,
    Column("id", Uuid, primary_key=True),
    Column("file_ids", JSON, nullable=False),
)

mapper_reg.map_imperatively(ThemeTest, theme_test_table)
mapper_reg.map_imperatively(Theme, theme_table)
mapper_reg.map_imperatively(QuestionType, question_type_table)
mapper_reg.map_imperatively(Question, question_table)
mapper_reg.map_imperatively(Answer, answer_table)
mapper_reg.map_imperatively(User, user_table)
mapper_reg.map_imperatively(ResultTest, result_test_table)
mapper_reg.map_imperatively(UploadedPhoto, uploaded_photo_table)
