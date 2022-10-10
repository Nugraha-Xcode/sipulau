import json
import os
import zipfile
import shutil
from typing import List, Union
from uuid import uuid4

from osgeo import ogr, osr

from db import db
from minioclient import minio_client
from models import ObjectId
from models import DownloadRequestDetail
from settings import settings
from sqlquery import insert_directus_files_q
from const import USER_DOWNLOADS_FOLDER_ID
from util import get_current_active_island_table


def process_download_shp(data: DownloadRequestDetail) -> ObjectId:
    # create directory if not exists
    if not os.path.isdir("/tmp/sipulau_worker"):
        os.mkdir("/tmp/sipulau_worker")

    unq_id = str(uuid4())
    tmp_dir = f"/tmp/sipulau_worker/{unq_id}"
    storage_root = settings.STORAGE_ROOT + "/" if settings.STORAGE_ROOT else ""

    # process filters
    filters: List[str] = []

    # advanced query body first, then classic filter
    if data.filterOpts is not None:
        filters = data.filterOpts.filterDirectives
    else:
        # prioritize selected filter
        if data.selected is not None and len(data.selected) > 0:
            data_selected_str = ",".join(map(str, data.selected))
            filters.append(f"id_toponim IN ({data_selected_str})")
        else:
            equal_filters: List[List[Union[str, None]]] = [
                [data.fid, "fid"],
                [data.id_wilayah, "id_wilayah"],
                [data.wadmkd, "wadmkd"],
                [data.wadmkc, "wadmkc"],
                [data.wadmkk, "wadmkk"],
                [data.wadmpr, "wadmpr"],
            ]
            like_filters: List[List[Union[str, None]]] = [
                [data.nammap, "nammap"],
                [data.artinam, "artinam"],
                [data.sjhnam, "sjhnam"],
                [data.aslbhs, "aslbhs"],
                [data.status, "status"],
            ]
            # id_toponim filter
            if data.id_toponim is not None:
                filters.append(f"id_toponim = {data.id_toponim}")
            # remark filter
            if data.remark is not None:
                if data.remark == "Berpenduduk" or data.remark == "Tidak Berpenduduk":
                    filters.append(f"SPLIT_PART(remark, ' - ', 2) ~* '^{data.remark}'")
                else:
                    filters.append(
                        "SPLIT_PART(remark, ' - ', 2) !~* '^Berpenduduk|^Tidak Berpenduduk'"
                    )
            # bbox OR aoi filter
            if data.bbox is not None:
                filters.append(
                    f"geom && ST_MakeEnvelope({data.bbox.xmin}, {data.bbox.ymin}, {data.bbox.xmax}, {data.bbox.ymax}, 4326)"
                )
            elif data.aoi is not None:
                escaped = data.aoi.replace("'", "''")
                filters.append(f"ST_Intersects(ST_GeomFromGeoJSON('{escaped}'), geom)")
            # unselected filter
            if data.unselected is not None and len(data.unselected) > 0:
                data_unselected_str = ",".join(map(str, data.unselected))
                filters.append(f"id_toponim NOT IN ({data_unselected_str})")
            # equal str filters
            for fil in equal_filters:
                if fil[0] is not None:
                    escaped = fil[0].replace("'", "''")
                    filters.append(f"{fil[1]} = '{escaped}'")
            # like filters
            for fil in like_filters:
                if fil[0] is not None:
                    escaped = fil[0].replace("'", "''")
                    filters.append(f"{fil[1]} ILIKE '%{escaped}%'")

    shp_driver: ogr.Driver = ogr.GetDriverByName("ESRI Shapefile")
    pg_driver: ogr.Driver = ogr.GetDriverByName("PostgreSQL")

    in_data_src: ogr.DataSource = pg_driver.Open(
        f"PG: dbname='{settings.POSTGRES_DB}' "
        + f"host='{settings.POSTGRES_HOST}' "
        + f"port='{settings.POSTGRES_PORT}' "
        + f"user='{settings.POSTGRES_USER}' "
        + f"password='{settings.POSTGRES_PASSWORD}'",
    )
    table_name = get_current_active_island_table()
    in_layer: ogr.Layer = in_data_src.GetLayer(table_name)

    if len(filters) > 0:
        in_layer.SetAttributeFilter(" AND ".join(filters))

    # create output
    out_data_src: ogr.DataSource = shp_driver.CreateDataSource(f"{tmp_dir}")

    srs: osr.SpatialReference = in_layer.GetSpatialRef()
    geom_type = in_layer.GetGeomType()
    out_layer: ogr.Layer = out_data_src.CreateLayer(
        "titik_pulau", srs, geom_type, ["ENCODING=UTF-8"]
    )

    in_layer_defn: ogr.FeatureDefn = in_layer.GetLayerDefn()
    out_layer_defn: ogr.FeatureDefn = out_layer.GetLayerDefn()

    # fetch FID manually because PK column won't be fetched in fields
    fid_column = in_layer.GetFIDColumn()
    out_layer.CreateField(ogr.FieldDefn(fid_column, ogr.OFTInteger64))

    # get the rest of columns
    fields: List[str] = []
    for i in range(in_layer_defn.GetFieldCount()):
        field_defn: ogr.FieldDefn = in_layer_defn.GetFieldDefn(i)
        field_name: str = field_defn.GetName()
        fields.append(field_name)
        out_layer.CreateField(field_defn)

    for feature in in_layer:
        feature: ogr.Feature
        geom: ogr.Geometry = feature.GetGeometryRef()
        new_feature = ogr.Feature(out_layer_defn)
        # set PK (FID)
        fid = feature.GetFID()
        new_feature.SetGeometry(geom)
        new_feature.SetField(fid_column, fid)
        for field_name in fields:
            field_content = feature.GetField(field_name)
            new_feature.SetField(field_name, field_content)
        out_layer.CreateFeature(new_feature)
        feature.Destroy()

    in_data_src.Destroy()
    out_data_src.Destroy()

    zip_file_path = f"{tmp_dir}/{unq_id}.zip"

    # creating zip file with write mode
    with zipfile.ZipFile(zip_file_path, "w", zipfile.ZIP_DEFLATED) as newzip:
        files = os.listdir(tmp_dir)
        for file in files:
            if not file.endswith(".zip"):
                newzip.write(f"{tmp_dir}/{file}", file)
                os.remove(f"{tmp_dir}/{file}")

    zip_file_size = os.stat(zip_file_path).st_size

    try:
        minio_client.fput_object(
            settings.STORAGE_BUCKET,
            storage_root + unq_id + ".zip",
            zip_file_path,
            "application/zip",
        )
    finally:
        shutil.rmtree(tmp_dir)

    # create json filter description for repeat download
    description = data.dict(exclude_unset=True)
    description["table_name"] = table_name
    description = json.dumps(description)

    pool = db.get_pool()
    try:
        with pool.connection() as con:
            con.execute(
                insert_directus_files_q,
                [
                    unq_id,
                    "minioshp",
                    unq_id + ".zip",
                    unq_id + ".zip",
                    unq_id,
                    "application/zip",
                    USER_DOWNLOADS_FOLDER_ID,
                    zip_file_size,
                    description,
                ],
            )
    except Exception as e:
        minio_client.remove_object(settings.STORAGE_BUCKET, unq_id + ".zip")
        raise e

    return ObjectId(object_id=unq_id)
