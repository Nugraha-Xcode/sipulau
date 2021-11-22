from minio import Minio

from settings import settings

minio_client = Minio(
    endpoint=settings.STORAGE_ENDPOINT,
    access_key=settings.STORAGE_ACCESS_KEY_ID,
    secret_key=settings.STORAGE_SECRET_ACCESS_KEY,
    secure=False,
)
