from const import ACTIVE_ISLAND_KEY as key
from models import ActiveIsland, BasicMessage
from redisclient import redis_client


def set_active_island_table(data: ActiveIsland):
    redis_client.set(key, data.table_name)
    return BasicMessage(message="Success")
