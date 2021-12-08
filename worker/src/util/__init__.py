from typing import Union, Tuple

from redisclient import redis_client
from db import db
from sqlquery import get_current_active_island_table_q
from const import ACTIVE_ISLAND_KEY as key


def get_current_active_island_table() -> str:
    cached = redis_client.get(key)
    if cached is not None:
        return str(cached, "UTF-8")
    else:
        pool = db.get_pool()
        with pool.connection() as con:
            cur = con.execute(get_current_active_island_table_q)
            value: Union[Tuple[str], None] = cur.fetchone()
        if value is not None:
            redis_client.set(key, value[0])
            return value[0]
        else:
            raise Exception("No active table")
