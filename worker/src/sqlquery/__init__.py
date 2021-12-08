from psycopg.sql import SQL, Identifier, Composed, Literal

from models import DataTypeEnum

insert_directus_files_q = """INSERT INTO directus_files(id, storage, filename_disk, filename_download, title, type, folder, filesize, description, uploaded_on)
VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, CURRENT_TIMESTAMP)"""

get_next_table_version_q = "SELECT nextval(%s)"

get_current_active_island_table_q = "SELECT table_name FROM titik_pulau_aktif"

delete_directus_files_entry_q = (
    "DELETE FROM directus_files WHERE storage = %s AND filename_disk = %s"
)


def create_new_version_table_q(
    new_table_name: str, data_type: DataTypeEnum
) -> Composed:
    return SQL("CREATE TABLE {} (LIKE {} INCLUDING INDEXES)").format(
        Identifier(new_table_name), Identifier(f"{data_type.value}_template")
    )


def create_fid_sequence_q(seq_name: str, new_table_name: str) -> Composed:
    return SQL(
        "CREATE SEQUENCE IF NOT EXISTS {} INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 999999 CACHE 1 OWNED BY {}.fid"
    ).format(Identifier(seq_name), Identifier(new_table_name))


def alter_fid_default_value_q(new_table_name: str, seq_name: str) -> Composed:
    return SQL(
        "ALTER TABLE {} ALTER COLUMN fid SET DEFAULT 'P' || to_char(nextval({}), 'FM000000')"
    ).format(Identifier(new_table_name), Literal(seq_name))


def drop_table_q(table_name: str) -> Composed:
    return SQL("DROP TABLE {}").format(Identifier(table_name))


def add_into_table_list_q(data_type: DataTypeEnum) -> Composed:
    return SQL("INSERT INTO {} (table_name, user_created) VALUES (%s, %s)").format(
        Identifier(f"{data_type.value}_tables")
    )
