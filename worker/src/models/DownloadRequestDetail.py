from typing import List, Optional

from pydantic import BaseModel

class BoundingBox(BaseModel):
    xmin: float
    ymin: float
    xmax: float
    ymax: float


class DownloadRequestDetail(BaseModel):
    fid: Optional[str] = None
    id_toponim: Optional[int] = None
    nammap: Optional[str] = None
    artinam: Optional[str] = None
    sjhnam: Optional[str] = None
    aslbhs: Optional[str] = None
    id_wilayah: Optional[str] = None
    wadmkd: Optional[str] = None
    wadmkc: Optional[str] = None
    wadmkk: Optional[str] = None
    wadmpr: Optional[str] = None
    status: Optional[str] = None
    remark: Optional[str] = None
    bbox: Optional[BoundingBox] = None
    selected: Optional[List[int]] = None
    unselected: Optional[List[int]] = None
    aoi: Optional[str] = None
