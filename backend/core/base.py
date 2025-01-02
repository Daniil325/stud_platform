from dataclasses import dataclass


@dataclass
class Entity:
    _id: str

    @property
    def id(self) -> str:
        return self._id
    
    def __eq__(self, other) -> bool:
        if not isinstance(other, Entity):
            return False
        return self.__class__ == other.__class__ and self.id == other.id
