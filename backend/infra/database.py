from typing import List
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from core.models import Answer, Question, ResultTest, Theme, ThemeTest
from core.protocols import AnswerRepo, QuestionRepo, ResultTestRepo, ThemeRepo, ThemeTestRepo


class SqlRepo:
    
    def __init__(self, session: AsyncSession) -> None:
        self.session = session
        
        
class SqlThemeRepo(SqlRepo, ThemeRepo):
    
    async def add(self, theme: Theme):
        await self.session.add(theme)
    
    async def get_all(self) -> List[Theme]:
        stmt = select(Theme)
        return (await self.session.execute(stmt)).scalars()
    
    async def get_by_id(self, theme_id: str) -> Theme:
        stmt = select(Theme).where(Theme.id == theme_id)
        return (await self.session.execute(stmt)).scalar_one_or_none()
    
    

class SqlThemeTestRepo(SqlRepo, ThemeTestRepo):
    
    async def add(self, theme_test: ThemeTest):
        await self.session.add(theme_test)
    
    async def get_by_id(self, theme_test_id: str) -> ThemeTest:
        stmt = select(ThemeTest).where(ThemeTest.id == theme_test_id)
        return (await self.session.execute(stmt)).scalar_one_or_none()
    
    
class SqlQuestionRepo(SqlRepo, QuestionRepo):
    
    async def add(self, question: Question):
        await self.session.add(question)
        
    async def get_by_id(self, question_id: str) -> Question:
        stmt = select(Question).where(Question.id == question_id)
        return (await self.session.execute(stmt)).scalar_one_or_none()


class SqlAnswerRepo(SqlRepo, AnswerRepo):
    
    async def add(self, answer: Answer):
        await self.session.add(answer)
        
    async def get_by_id(self, answer_id: str) -> Answer:
        stmt = select(Answer).where(Answer.id == answer_id)
        return (await self.session.execute(stmt)).scalar_one_or_none()
    
    async def get_by_question(self, question_id) -> List[Answer]:
        stmt = select(Answer).where(Answer.question_id == question_id)
        return (await self.session.execute(stmt)).scalars()
    
    async def get_answer_cost(self, answers):
        ...
        
        
class SqlResultTestRepo(SqlRepo, ResultTestRepo):
    
    async def get_by_id(self, result_test_id: str) -> ResultTest:
        stmt = select(ResultTest).where(ResultTest.id == result_test_id)
        return (await self.session.execute(stmt)).scalar_one_or_none()
        