from typing import Any

from backend.core.models import Answer, Question


class CheckRight:

    def __init__(
        self,
        user_data: dict[Question, Answer],
        current_data: dict[Question, list[Answer]],
    ):
        self.user_data = user_data
        self.current_data = current_data

    async def __call__(self):
        ...
