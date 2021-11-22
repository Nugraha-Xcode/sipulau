from urllib import parse

from psycopg_pool import ConnectionPool

from settings import settings

escaped_password = parse.quote(settings.POSTGRES_PASSWORD)


class Database:
    def open_pool(self) -> None:
        self.pool = ConnectionPool(
            f"postgresql://{settings.POSTGRES_USER}:{escaped_password}@{settings.POSTGRES_HOST}/{settings.POSTGRES_DB}",
            min_size=1,
            max_size=4,
        )

    def close_pool(self) -> None:
        if self.pool is not None:
            self.pool.close()
        else:
            raise Exception("Pool has not been opened")

    def get_pool(self) -> ConnectionPool:
        if self.pool is not None:
            return self.pool
        else:
            raise Exception("Pool has not been opened")


db = Database()
