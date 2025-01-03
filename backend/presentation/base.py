from typing import Generic, TypeVar

from humps import camelize
from pydantic import BaseModel, ConfigDict


Item = TypeVar("Item", bound=BaseModel)

APIModelConfig = ConfigDict(
    alias_generator=camelize,
    str_strip_whitespace=True,
    populate_by_name=True,
    extra="ignore",
)


ApiInputModelConfig = ConfigDict(
    alias_generator=camelize, str_strip_whitespace=True, extra="ignore"
)


class ListResponse(Generic[Item]):
    items: list[Item]
