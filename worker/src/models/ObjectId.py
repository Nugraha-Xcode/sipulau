from pydantic import BaseModel


class ObjectId(BaseModel):
    object_id: str
