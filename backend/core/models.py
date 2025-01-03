from dataclasses import dataclass

from core.base import Entity


@dataclass
class Theme:
    id: str
    name: str
    description: str
    lection_id: str | None = None
    test_id: str | None = None


@dataclass
class ThemeTest:
    id: str
    name: str 
    min_score: int
    time_limit: int
    
    
@dataclass
class QuestionType:
    id: str
    name: str


@dataclass
class Question:
    id: str
    name: str
    test_id: str
    type_id: str
    

@dataclass
class Answer:
    id: str
    text: str
    question_id: str
    is_right: bool = False
    cost: int = 0


@dataclass
class User:
    id: str
    username: str
    password: str


@dataclass
class ResultTest:
    id: str
    user_id: str
    test_id: str


@dataclass
class UploadedPhoto:
    id: str
    file_ids: dict[str, str]
