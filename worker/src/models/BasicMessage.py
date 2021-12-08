from pydantic import BaseModel


class BasicMessage(BaseModel):
    message: str
