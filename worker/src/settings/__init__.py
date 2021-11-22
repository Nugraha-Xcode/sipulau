from pydantic import BaseSettings


class Settings(BaseSettings):
    POSTGRES_HOST: str = "postgis"
    POSTGRES_PORT: str = "5432"
    POSTGRES_DB: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    STORAGE_ACCESS_KEY_ID: str
    STORAGE_SECRET_ACCESS_KEY: str
    STORAGE_ENDPOINT: str = "http://minio:9000"
    STORAGE_BUCKET: str = "sipulau-shp"


    class Config(BaseSettings.Config):
        env_file = "./../.env"
        case_sensitive = True


settings = Settings()
