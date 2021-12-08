from pydantic import BaseModel


class ActiveIsland(BaseModel):
    table_name: str
