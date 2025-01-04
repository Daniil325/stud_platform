from dataclasses import dataclass

from core.models import Question
from infra.database import SqlQuestionRepo


@dataclass
class CreateQuestionTypeDto:
    name: str
    

@dataclass
class CreateQuestionTypeCommand:
    ...


@dataclass
class CreateQuestionDto:
    name: str
    test_id: str
    type_id: str
    

@dataclass
class CreateQuestionCommand:
    question_repo: SqlQuestionRepo
    
    async def __call__(self, dto: CreateQuestionDto):
        identity = self.test_repo.new_id()
        question = Question(identity, dto.name, dto.test_id, dto.type_id)
        await self.question_repo.add(question)
        return identity
        