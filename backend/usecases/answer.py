from dataclasses import dataclass

from core.models import Answer
from infra.database import SqlAnswerRepo


@dataclass
class CreateAnswerDto:
    text: str
    question_id: str
    is_right: bool = False
    cost: int = 0


@dataclass
class CreateAnswerCommand:
    answer_repo: SqlAnswerRepo

    async def __call__(self, dto: CreateAnswerDto):
        identity = self.answer_repo.new_id()
        answer = Answer(identity, dto.text, dto.question_id, dto.is_right, dto.cost)
        await self.answer_repo.add(answer)
        return identity
