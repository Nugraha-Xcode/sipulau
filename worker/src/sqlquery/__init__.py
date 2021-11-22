insert_directus_files = """INSERT INTO directus_files(id, storage, filename_disk, filename_download, title, type, folder, uploaded_by, filesize, uploaded_on)
VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, CURRENT_TIMESTAMP)"""
