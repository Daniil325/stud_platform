from dataclasses import dataclass


@dataclass
class Entity:
    id: str

    @property
    def id(self) -> str:
        return self.id