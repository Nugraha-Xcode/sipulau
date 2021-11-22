class InvalidUploadedDataException(Exception):
    def __init__(self, detail: str, object_key: str) -> None:
        self.object_key = object_key
        self.detail = detail
