from dataclasses import dataclass

from backend.core.base import Entity


@dataclass
class ThemeTest(Entity):
    name: str
    min_score: int
    time_limit: int


@dataclass
class Theme(Entity):
    name: str
    description: str
    lection: str | None = None
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
class Answer:
    text: str
    is_right: bool = False
    cost: int = 0
    question_id: str
    
    def count_cost(self):
        ...


@dataclass
class User:
    username: str
    password: str


@dataclass
class ResultTest:
    user_id: str
    test_id: str


@dataclass
class UploadedPhoto(Entity):
    id: str
    file_ids: dict[str, str]

