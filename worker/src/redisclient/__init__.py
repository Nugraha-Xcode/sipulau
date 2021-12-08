from redis import Redis

from settings import settings

redis_client = Redis(host=settings.REDIS_HOST, port=int(settings.REDIS_PORT))
