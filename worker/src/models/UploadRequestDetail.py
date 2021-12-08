from enum import Enum
from uuid import UUID

from pydantic import BaseModel


class DataTypeEnum(str, Enum):
    TITIKPULAU = "titik_pulau"


class UploadRequestDetail(BaseModel):
    user_id: UUID
    data_type: DataTypeEnum
    object_key: str
