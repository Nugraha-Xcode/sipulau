from fastapi import FastAPI

from fastapi.responses import JSONResponse

from models import BasicMessage, DownloadRequestDetail
from models import ObjectId
from models.exceptions import InvalidUploadedDataException
from scripts import (
    init_gdal_config,
)
from db import db
from scripts.process_download_shp import process_download_shp


app = FastAPI(openapi_url="/openapi.json", docs_url="/docs", redoc_url=None)


@app.on_event("startup")
def startup_event() -> None:
    init_gdal_config()
    db.open_pool()


@app.on_event("shutdown")
def shutdown_event() -> None:
    db.close_pool()


@app.exception_handler(InvalidUploadedDataException)
async def invalid_uploaded_data_exception_handler(
    _, exc: InvalidUploadedDataException
) -> JSONResponse:
    # TODO add logic for invalid uploaded data
    return JSONResponse(
        status_code=200,
        content={"detail": exc.detail},
    )


@app.get("/", response_model=BasicMessage)
async def hello() -> BasicMessage:
    return BasicMessage(detail="Hello from Braga Technologies!")


@app.post(
    "/download/shp",
    responses={
        200: {"description": "Successful Response", "content": {"application/zip": {}}}
    },
)
def download_shp(data: DownloadRequestDetail) -> ObjectId:
    return process_download_shp(data)
