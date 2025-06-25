from fastapi import FastAPI

from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

from db import db
from models import (
    ActiveIsland,
    BasicMessage,
    DownloadRequestDetail,
    ObjectId,
    UploadRequestDetail,
)
from models.exceptions import InvalidUploadedDataException
from scripts import (
    init_gdal_config,
    process_download_shp,
    process_uploaded_data,
    set_active_island_table,
)
from scripts.process_uploaded_data import delete_directus_files_entry
from minioclient import minio_client
from settings import settings


app = FastAPI(openapi_url="/openapi.json", docs_url="/docs", redoc_url=None)


@app.on_event("startup")
def startup_event() -> None:
    init_gdal_config()
    db.open_pool()


@app.on_event("shutdown")
def shutdown_event() -> None:
    db.close_pool()


@app.exception_handler(InvalidUploadedDataException)
def invalid_uploaded_data_exception_handler(
    _, exc: InvalidUploadedDataException
) -> JSONResponse:
    minio_client.remove_object(settings.STORAGE_BUCKET, exc.object_key)
    delete_directus_files_entry(exc.object_key)
    return JSONResponse(status_code=400, content={"message": exc.detail})


@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(_, exc: StarletteHTTPException) -> JSONResponse:
    return JSONResponse(status_code=exc.status_code, content={"message": exc.detail})


@app.get("/", response_model=BasicMessage)
async def hello() -> BasicMessage:
    return BasicMessage(message="Hello from Badan Informasi Geospasial!")


@app.post(
    "/download/shp",
    responses={
        200: {"description": "Successful Response", "content": {"application/zip": {}}}
    },
)
def download_shp(data: DownloadRequestDetail) -> ObjectId:
    return process_download_shp(data)


@app.post("/upload/shp", response_model=BasicMessage)
def upload_shp(data: UploadRequestDetail) -> BasicMessage:
    return process_uploaded_data(data)


@app.post("/set-active-island-table", response_model=BasicMessage)
def set_island_table(data: ActiveIsland) -> BasicMessage:
    return set_active_island_table(data)
