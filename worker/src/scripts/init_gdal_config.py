from osgeo import gdal, ogr

from settings import settings


def init_gdal_config() -> None:
    ogr.UseExceptions()
    gdal.SetConfigOption("AWS_ACCESS_KEY_ID", settings.STORAGE_ACCESS_KEY_ID)
    gdal.SetConfigOption("AWS_SECRET_ACCESS_KEY", settings.STORAGE_SECRET_ACCESS_KEY)
    gdal.SetConfigOption("AWS_S3_ENDPOINT", settings.STORAGE_ENDPOINT)
    gdal.SetConfigOption("AWS_HTTPS", "NO")
    gdal.SetConfigOption("AWS_VIRTUAL_HOSTING", "FALSE")
    gdal.SetConfigOption("PG_USE_COPY", "YES")
