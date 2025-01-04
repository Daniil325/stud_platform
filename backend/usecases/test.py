from dataclasses import dataclass

from core.models import ThemeTest
from infra.database import SqlThemeTestRepo


@dataclass
class CreteTestDto:
    name: str
    min_score: int
    time_limit: int


@dataclass
class CreateTestCommand:
    test_repo: SqlThemeTestRepo

    async def __call__(self, dto: CreteTestDto):
        identity = self.test_repo.new_id()
        test = ThemeTest(identity, dto.name, dto.min_score, dto.time_limit)
        await self.test_repo.add(test)
        return identity
