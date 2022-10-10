from typing import Optional
from pydantic import BaseSettings


class Settings(BaseSettings):
    POSTGRES_HOST: str
    POSTGRES_PORT: str
    POSTGRES_DB: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    STORAGE_ACCESS_KEY_ID: str
    STORAGE_SECRET_ACCESS_KEY: str
    STORAGE_ENDPOINT: str
    STORAGE_BUCKET: str
    STORAGE_ROOT: Optional[str] = None
    REDIS_HOST: str
    REDIS_PORT: str

    class Config(BaseSettings.Config):
        env_file = "./../.env"
        case_sensitive = True


settings = Settings()
