from abc import ABC, abstractmethod
from dataclasses import dataclass
from datetime import UTC, datetime, timedelta
from typing import Any, BinaryIO, List

from core.models import Answer, Question, ResultTest, Theme, ThemeTest, User


class ImageStorage(ABC):

    @abstractmethod
    async def exists(self, image_id: str) -> bool:
        ...

    @abstractmethod
    async def upload(self, filename: str, file: BinaryIO, size: int | None = None) -> str:
        ...

    @abstractmethod
    async def download(self, image_id: str) -> bytes:
        ...


class ThemeRepo(ABC):
    
    @abstractmethod
    def add(self, theme: Theme):
        ...
        
    @abstractmethod
    def get_all(self) -> List[Theme]:
        ...
        
    @abstractmethod
    def get_by_id(self, theme_id: str) -> Theme:
        ...
    

class ThemeTestRepo(ABC):
    
    @abstractmethod
    def add(self, theme_test: ThemeTest):
        ...
        
    @abstractmethod
    def get_by_id(self, theme_test_id: str) -> ThemeTest:
        ...
        
        
class QuestionRepo(ABC):
    
    @abstractmethod
    def add(self, question: Question):
        ...
    
    @abstractmethod
    def get_by_id(self, question_id) -> Question:
        ...
    
    
class AnswerRepo(ABC):
    
    @abstractmethod
    def add(self, answer: Answer):
        ...
    
    @abstractmethod
    def get_by_id(self, answer_id) -> Answer:
        ...
        
    @abstractmethod
    def get_by_question(self, question_id) -> List[Answer]:
        ...
        
    @abstractmethod
    def get_answer_cost(self, answers: List[Answer]) -> int | float:
        ...
        
        
class UserRepo(ABC):
    
    @abstractmethod
    def get_by_id(self, user_id: str) -> User:
        ...
    

class ResultTestRepo(ABC):
    
    @abstractmethod
    def get_by_user(self, user_id: str) -> List[ResultTest] | None:
        ...
        
    @abstractmethod
    def get_by_id(self, result_test_id: str) -> ResultTest:
        ...