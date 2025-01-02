from dataclasses import dataclass

from core.base import Entity


@dataclass
class ThemeTest(Entity):
    name: str
    min_score: int
    time_limit: int


@dataclass
class Theme(Entity):
    name: str
    description: str
    lection_id: str | None = None
    test_id: str | None = None

    
@dataclass
class QuestionType(Entity):
    name: str


@dataclass
class Question(Entity):
    name: str
    test_id: str
    type_id: str
    

@dataclass
class Answer(Entity):
    text: str
    question_id: str
    is_right: bool = False
    cost: int = 0


@dataclass
class User(Entity):
    username: str
    password: str


@dataclass
class ResultTest(Entity):
    user_id: str
    test_id: str


@dataclass
class UploadedPhoto(Entity):
    file_ids: dict[str, str]
