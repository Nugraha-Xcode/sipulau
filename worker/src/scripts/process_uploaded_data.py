from typing import Any, List, Tuple, Union, Dict
from uuid import UUID

from osgeo import ogr, osr
from fastapi import HTTPException

from db import db
from minioclient import minio_client
from models import BasicMessage, UploadRequestDetail, DataTypeEnum
from models.exceptions import InvalidUploadedDataException
from settings import settings
from sqlquery import (
    add_into_table_list_q,
    alter_fid_default_value_q,
    create_fid_sequence_q,
    create_new_version_table_q,
    delete_directus_files_entry_q,
    drop_table_q,
    get_next_table_version_q,
)


def get_fields_type(data_type: DataTypeEnum) -> Dict[str, Any]:
    return {
        "id_toponim": ogr.OFTInteger64,
        "statpub": ogr.OFTString,
        "statpem": ogr.OFTString,
        "status": ogr.OFTString,
        "zonautm": ogr.OFTString,
        "nlp": ogr.OFTString,
        "klstpn": ogr.OFTString,
        "lcode": ogr.OFTString,
        "ftype": ogr.OFTString,
        "namlok": ogr.OFTString,
        "namspe": ogr.OFTString,
        "nammap": ogr.OFTString,
        "namgaz": ogr.OFTString,
        "alias": ogr.OFTString,
        "aslbhs": ogr.OFTString,
        "artinam": ogr.OFTString,
        "sjhnam": ogr.OFTString,
        "nambef": ogr.OFTString,
        "namrec": ogr.OFTString,
        "ucapan": ogr.OFTString,
        "ejaan": ogr.OFTString,
        "koordinat1": ogr.OFTString,
        "koordx": ogr.OFTReal,
        "koordy": ogr.OFTReal,
        "koordinat2": ogr.OFTString,
        "koordx2": ogr.OFTReal,
        "koordy2": ogr.OFTReal,
        "elevasi": ogr.OFTReal,
        "akurasi": ogr.OFTReal,
        "negara": ogr.OFTString,
        "id_wilayah": ogr.OFTString,
        "wadmpr": ogr.OFTString,
        "wadmkk": ogr.OFTString,
        "wadmkc": ogr.OFTString,
        "wadmkd": ogr.OFTString,
        "ksurveyor": ogr.OFTInteger64,
        "nsurveyor": ogr.OFTString,
        "narsum": ogr.OFTString,
        "tglsurvei": ogr.OFTDate,
        "sumber": ogr.OFTString,
        "remark": ogr.OFTString,
        "foto1": ogr.OFTString,
        "foto2": ogr.OFTString,
        "foto3": ogr.OFTString,
        "foto4": ogr.OFTString,
        "sketsa": ogr.OFTString,
        "rekaman1": ogr.OFTString,
        "rekaman2": ogr.OFTString,
        "created_by": ogr.OFTInteger64,
        "pjg_gp": ogr.OFTReal,
        "luas": ogr.OFTReal,
    }


def get_fields(data_type: DataTypeEnum) -> List[str]:
    return [
        "id_toponim",
        "statpub",
        "statpem",
        "status",
        "zonautm",
        "nlp",
        "klstpn",
        "lcode",
        "ftype",
        "namlok",
        "namspe",
        "nammap",
        "namgaz",
        "alias",
        "aslbhs",
        "artinam",
        "sjhnam",
        "nambef",
        "namrec",
        "ucapan",
        "ejaan",
        "koordinat1",
        "koordx",
        "koordy",
        "koordinat2",
        "koordx2",
        "koordy2",
        "elevasi",
        "akurasi",
        "negara",
        "id_wilayah",
        "wadmpr",
        "wadmkk",
        "wadmkc",
        "wadmkd",
        "ksurveyor",
        "nsurveyor",
        "narsum",
        "tglsurvei",
        "sumber",
        "remark",
        "foto1",
        "foto2",
        "foto3",
        "foto4",
        "sketsa",
        "rekaman1",
        "rekaman2",
        "created_by",
        "pjg_gp",
        "luas",
    ]


def is_geometry_type_valid(in_layer: ogr.Layer, data_type: DataTypeEnum) -> bool:
    in_geom_type: ogr.wkbUnknown = in_layer.GetGeomType()
    return in_geom_type == ogr.wkbPoint


def create_features(
    in_layer: ogr.Layer,
    fields: List[str],
    out_layer: ogr.Layer,
    data_type: DataTypeEnum,
) -> None:
    out_layer_defn: ogr.FeatureDefn = out_layer.GetLayerDefn()

    # remove id_toponim because Primary Key needs to be set as FID
    fields.remove("id_toponim")

    for feature in in_layer:
        feature: ogr.Feature
        geom: ogr.Geometry = feature.GetGeometryRef()
        new_feature = ogr.Feature(out_layer_defn)
        new_feature.SetFID(feature.GetField("id_toponim"))
        for field in fields:
            new_feature.SetField(field, feature.GetField(field))
        new_feature.SetGeomField("geom", geom)
        out_layer.CreateFeature(new_feature)
    new_feature = None


def create_new_table(data_type: DataTypeEnum) -> str:
    pool = db.get_pool()
    with pool.connection() as con:
        cur = con.cursor()

        cur.execute(get_next_table_version_q, [f"{data_type.value}_versions_seq"])
        next_version: Union[Tuple[int], None] = cur.fetchone()
        if next_version is None:
            raise Exception("Failed to fetch next table version number")
        ver_number = next_version[0]
        new_table_name = f"{data_type.value}_v{ver_number}"

        cur.execute(create_new_version_table_q(new_table_name, data_type))

        # create sequence for titik_pulau fid
        seq_name = f"{new_table_name}_fid_seq"
        cur.execute(create_fid_sequence_q(seq_name, new_table_name))
        cur.execute(alter_fid_default_value_q(new_table_name, seq_name))
    return new_table_name


def drop_new_table(new_table_name: str) -> None:
    pool = db.get_pool()
    with pool.connection() as con:
        con.execute(drop_table_q(new_table_name))


def add_to_table_list(
    new_table_name: str, user_id: UUID, data_type: DataTypeEnum
) -> None:
    pool = db.get_pool()
    with pool.connection() as con:
        con.execute(add_into_table_list_q(data_type), [new_table_name, user_id])


def delete_directus_files_entry(object_key: str) -> None:
    pool = db.get_pool()
    with pool.connection() as con:
        con.execute(delete_directus_files_entry_q, ["minioshp", object_key])


def process_uploaded_data(data: UploadRequestDetail) -> BasicMessage:
    shp_driver: ogr.Driver = ogr.GetDriverByName("ESRI Shapefile")
    in_data_src: ogr.DataSource = shp_driver.Open(
        f"/vsizip//vsis3/{settings.STORAGE_BUCKET}/{data.object_key}", 0
    )

    # check if exist
    if in_data_src is not None:
        pass
    else:
        raise InvalidUploadedDataException(
            "Gagal membuka data. "
            + "Pastikan arsip hanya memiliki satu set Shapefile "
            + "dan tidak berada di dalam folder",
            data.object_key,
        )

    in_layer: ogr.Layer = in_data_src.GetLayer()

    # check geometry type
    if is_geometry_type_valid(in_layer, data.data_type):
        pass
    else:
        raise InvalidUploadedDataException(
            "Jenis geometri tidak valid. Pastikan jenis geometri sesuai",
            data.object_key,
        )

    # check srs
    in_srs: osr.SpatialReference = in_layer.GetSpatialRef()
    in_srs_code: str = (
        in_srs.GetAuthorityName(None) + ":" + in_srs.GetAuthorityCode(None)
    )
    if in_srs_code == "EPSG:4326":
        pass
    else:
        raise InvalidUploadedDataException(
            "Sistem referensi tidak valid. "
            + "Pastikan data memiliki sistem referensi WGS84",
            data.object_key,
        )

    in_layer_defn: ogr.FeatureDefn = in_layer.GetLayerDefn()

    # check fields
    shp_fields: List[str] = []
    db_fields = get_fields(data.data_type)
    db_fields_type = get_fields_type(data.data_type)
    for i in range(in_layer_defn.GetFieldCount()):
        field_defn: ogr.FieldDefn = in_layer_defn.GetFieldDefn(i)
        field_name: str = field_defn.GetName()
        if field_name in db_fields:
            field_type = field_defn.GetType()
            if db_fields_type.get(field_name) == field_type:
                shp_fields.append(field_name)
            else:
                raise InvalidUploadedDataException(
                    "Atribut tidak valid. "
                    + "Pastikan kolom atribut memiliki jenis data yang sesuai",
                    data.object_key,
                )
    if len(shp_fields) == len(db_fields):
        pass
    else:
        raise InvalidUploadedDataException(
            "Atribut tidak valid. "
            + "Pastikan nama kolom atribut beserta jumlah dan "
            + "jenis datanya sudah sesuai",
            data.object_key,
        )

    # create table and its dependencies first
    try:
        new_table_name = create_new_table(data.data_type)
    except Exception as e:
        minio_client.remove_object(settings.STORAGE_BUCKET, data.object_key)
        delete_directus_files_entry(data.object_key)
        raise e

    # open data src and input data
    pg_driver: ogr.Driver = ogr.GetDriverByName("PostgreSQL")
    out_data_src: ogr.DataSource = pg_driver.Open(
        f"PG: dbname='{settings.POSTGRES_DB}' "
        + f"host='{settings.POSTGRES_HOST}' "
        + f"port='{settings.POSTGRES_PORT}' "
        + f"user='{settings.POSTGRES_USER}' "
        + f"password='{settings.POSTGRES_PASSWORD}'",
        1,
    )
    out_layer: ogr.Layer = out_data_src.GetLayer(new_table_name)

    # start transaction
    try:
        out_layer.StartTransaction()
        create_features(in_layer, shp_fields, out_layer, data.data_type)
        out_layer.CommitTransaction()
    except RuntimeError as err:
        out_layer.RollbackTransaction()
        drop_new_table(new_table_name)
        err_str = str(err)
        detail_idx = err_str.find("DETAIL:")
        if detail_idx != -1:
            detail_idx += 7
            raise HTTPException(
                400, err_str[detail_idx : err_str.find("\n", detail_idx)].strip()
            )
        else:
            # just returns unexpected error if there's no DETAIL, to minimize returning unnecessary and sensitive data.
            raise err
    except Exception as err:
        # just in case there's other error than RuntimeError
        out_layer.RollbackTransaction()
        drop_new_table(new_table_name)
        raise err
    finally:
        minio_client.remove_object(settings.STORAGE_BUCKET, data.object_key)
        delete_directus_files_entry(data.object_key)

    # add into table list
    try:
        add_to_table_list(new_table_name, data.user_id, data.data_type)
    except Exception as e:
        drop_new_table(new_table_name)
        raise e

    return BasicMessage(message="Proses selesai")
