from pydantic_settings import BaseSettings


class Config(BaseSettings):
    HOST: str = "localhost"
    PORT: int = 8000

    # POSTGRES
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "123"
    POSTGRES_DB: str = "stud_platform"
    POSTGRES_HOST: str = "localhost"
    POSTGRES_PORT: int = 5432