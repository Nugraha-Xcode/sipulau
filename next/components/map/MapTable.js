import React, { useCallback, useContext, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { CgClose } from "react-icons/cg";

import Table from "../../components/core/table";
import AppContext from "../../context/AppContext";
import MapContext from "../../context/MapContext";
import MemoIcFilter from "../core/icons/IcFilter";
import MemoIcMapFilter from "../core/icons/IcMapFilter";
import Modal from "../modal";
import MapTableDownload from "./MapTableDownload";
import useToggle from "../../utils/useToggle";

const MapTable = ({
  dataTable,
  setDataTable,
  page,
  setPage,
  setToggledRow,
  toggledRow,
  isSelectAll,
  setIsSelectAll,
}) => {
  const { handleSetSnack, authToken } = useContext(AppContext);
  const { t } = useTranslation("attributetable");
  const {
    map,
    queryFilter,
    setIsOpenDrawer,
    setActiveFeature,
    setIsOpenFeature,
    toggleMapFilter,
    setQueryFilter,
    setActiveFilter,
    setFilterArr,
    setColumn,
    columnObj,
    bbox,
    setBbox,
    handleZoomExtend,
  } = useContext(MapContext);

  const [activeTab, setActiveTab] = useState("nama");
  const [isOption, setOption] = useState(false);
  const [isColumnOpt, setColumnOpt] = useState(false);
  const [isShowing, toggle] = useToggle();

  const [order, setOrder] = React.useState({
    orderBy: "id_toponim",
    orderAsc: true,
  });
  const [columns, setColums] = useState([
    { title: "column1", field: "id_toponim", show: true, sort: true },
    { title: "column2", field: "id_wilayah", show: true, sort: true },
    { title: "column3", field: "nammap", show: true, sort: true },
    { title: "column13", field: "alias", show: true, sort: true },
    { title: "column4", field: "artinam", show: true, sort: true },
    { title: "column5", field: "aslbhs", show: true, sort: true },
    { title: "column6", field: "sjhnam", show: true, sort: true },
    { title: "column7", field: "wadmkc", show: true, sort: true },
    { title: "column8", field: "wadmkd", show: true, sort: true },
    { title: "column9", field: "wadmkk", show: true, sort: true },
    { title: "column10", field: "wadmpr", show: true, sort: true },
    { title: "column11", field: "status", show: true, sort: true },
    { title: "column12", field: "remark", show: true, sort: true },
  ]);

  useEffect(async () => {
    const bboxStr = bbox
      ? `${bbox.xmin},${bbox.ymin},${bbox.xmax},${bbox.ymax}`
      : null;
    try {
      const response = await fetch(
        "/api/titik-pulau?page=" +
          page +
          "&ordby=" +
          order.orderBy +
          "&orddir=" +
          (order.orderAsc ? "ASC" : "DESC") +
          queryFilter +
          (bboxStr ? "&bbox=" + bboxStr : ""),
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + authToken,
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (response.status === 200) {
        setDataTable((prev) => [...prev, ...result]);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, [order.orderBy, order.orderAsc, page, queryFilter, bbox]);

  const handleZoomTo = useCallback(async () => {
    const bboxStr = bbox
      ? `${bbox.xmin},${bbox.ymin},${bbox.xmax},${bbox.ymax}`
      : null;
    // generate fetch query
    let fetchQuery = "/api/titik-pulau/extent";
    if (toggledRow.length > 0) {
      if (isSelectAll) {
        fetchQuery += "?unselected=" + toggledRow.map((el) => el.id).join(",");
      } else {
        fetchQuery += "?selected=" + toggledRow.map((el) => el.id).join(",");
      }
    } else if (queryFilter || bbox) {
      fetchQuery += "?" + queryFilter + (bboxStr ? "&bbox=" + bboxStr : "");
    }
    // fetch extent
    const response = await fetch(fetchQuery, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.status === 200) {
      map.fitBounds(
        [
          [result.xmin, result.ymin], // southwestern corner of the bounds
          [result.xmax, result.ymax], // northeastern corner of the bounds
        ],
        {
          padding: { top: 100, bottom: 50, left: 10, right: 10 },
          maxZoom: 15.5,
        }
      );
    } else {
      throw new Error(result.message);
    }
  }, [toggledRow, queryFilter, bbox, isSelectAll]);

  return (
    <>
      <div className='font-map'>
        <div className='border-b-2 flex relative px-5'>
          <div className='flex absolute h-full items-center z-10'>
            <div
              className='flex justify-center w-56 h-full items-center cursor-pointer'
              onClick={() => setActiveTab("nama")}
            >
              <p
                className={`${
                  activeTab === "nama" ? "text-main-blue" : "text-black-2"
                } text-xs`}
              >
                {t("activeLayer")}
              </p>
            </div>
            {/* <div
              className='flex justify-center w-56 h-full items-center cursor-pointer'
              onClick={() => setActiveTab("administrasi")}
            >
              <p
                className={`${
                  activeTab === "administrasi"
                    ? "text-main-blue"
                    : "text-black-2"
                } text-xs`}
              >
                Layer Administrasi Pulau
              </p>
            </div> */}
          </div>
          <div
            className={`relative transform ${
              activeTab === "administrasi"
                ? "translate-x-full"
                : "translate-x-0"
            } transition-all`}
          >
            <div className='absolute bg-white h-3 w-3 transform -translate-x-full bottom-[-2px] left-[2px] z-50 '>
              <div className='border-b-2 border-r-2 h-full w-full rounded-br-lg' />
            </div>
            <div className='border-t-2 border-r-2 border-l-2 border-b-2 border-b-white transform translate-y-[2px] rounded-t-md w-56 h-12 flex itemx-center justify-center p-1'>
              <div className='bg-[#F0F6FF] w-full h-full rounded-md'></div>
            </div>
            <div className='absolute bg-white h-3 w-3 transform translate-x-full bottom-[-2px] right-[2px] z-50'>
              <div className='border-b-2 border-l-2 h-full w-full rounded-bl-lg' />
            </div>
          </div>
          <button
            onClick={() => {
              setIsOpenDrawer(false);
              setIsOpenFeature(false);
              setActiveFeature("");
            }}
            className='absolute right-5'
          >
            <CgClose className='w-5 h-5 text-main-gray' />
          </button>
        </div>
        <div className='py-2 px-5 flex justify-between'>
          <div className='flex items-center gap-3'>
            <div className='relative'>
              <button
                onClick={() => setOption((prev) => !prev)}
                className='flex items-center gap-2 border py-2 px-5 rounded-full'
              >
                <img src='/images/ic-dots.svg' />
                <p className='text-xs text-main-gray'>{t("buttonOption")}</p>
              </button>

              <div
                className={`${
                  isOption ? "max-h-64" : "max-h-0"
                } absolute z-50  -bottom-2 transform rounded-lg shadow-style-1 translate-y-full overflow-hidden transition-all duration-300 ease-in-out`}
              >
                <div className='p-4 flex flex-col gap-4 rounded-lg border shadow-lg bg-white w-60 '>
                  <div
                    onClick={() => {
                      setOption(false);
                      setColumnOpt(true);
                    }}
                    className='flex gap-2 items-center cursor-pointer'
                  >
                    <img
                      src='/images/ic-add-circle.svg'
                      alt='button'
                      className='h-4'
                    />
                    <p className='text-xs text-main-gray'>{t("option1")}</p>
                  </div>
                  {/* <div className='flex gap-2 items-center cursor-pointer'>
                    <img
                      src='/images/ic-checkbox.svg'
                      alt='button'
                      className='h-4'
                    />
                    <p className='text-xs text-main-gray'>{t("option2")}</p>
                  </div> */}
                </div>
              </div>
            </div>
            <button
              onClick={
                bbox
                  ? () => {
                      setPage(1);
                      setDataTable([]);
                      setBbox(null);
                      map.off("moveend", handleZoomExtend);
                    }
                  : () => {
                      setPage(1);
                      setDataTable([]);
                      setBbox({
                        xmin: map.getBounds().getWest(),
                        ymin: map.getBounds().getSouth(),
                        xmax: map.getBounds().getEast(),
                        ymax: map.getBounds().getNorth(),
                      });
                    }
              }
              className={`${
                bbox ? "bg-blue-2 border-blue-3" : ""
              } flex items-center gap-2 border py-2 px-5 rounded-full`}
            >
              <MemoIcMapFilter bbox={bbox} />

              <p
                className={`${
                  bbox ? "text-main-blue" : "text-main-gray"
                } text-xs`}
              >
                {t("filterMapExtent")}
              </p>
            </button>
            <button
              onClick={handleZoomTo}
              className='flex items-center gap-2 border py-2 px-5 rounded-full'
            >
              <img src='/images/ic-zoom-to.svg' alt='button' className='h-4' />
              <p className='text-xs text-main-gray'>{t("zoom")}</p>
            </button>
            <button
              onClick={toggleMapFilter}
              className={`flex items-center gap-2 border py-2 px-5 rounded-full ${
                queryFilter ? "bg-blue-2 border-blue-3" : ""
              }`}
            >
              <MemoIcFilter queryFilter={queryFilter} />
              <p
                className={`text-xs ${
                  queryFilter ? "text-main-blue" : "text-main-gray"
                }`}
              >
                {t("filter")}
              </p>
            </button>
            <button
              disabled={queryFilter ? false : true}
              onClick={() => {
                setActiveFilter([]);
                setQueryFilter("");
                setDataTable([]);
                setFilterArr([{ id: (Math.random() * 10000).toFixed(0) }]);
                setColumn(columnObj);
              }}
              className={`${
                queryFilter ? "cursor-pointer" : "cursor-disable"
              } flex items-center gap-2 border py-2 px-5 rounded-full`}
            >
              <img src='/images/ic-close.svg' alt='button' className='h-4' />
              <p className='text-xs text-main-gray'>{t("resetFilter")}</p>
            </button>
            {/* <button
              onClick={() => {
                setActiveFilter([]);
                setQueryFilter("");
                setDataTable([]);
                setFilterArr([{ id: (Math.random() * 10000).toFixed(0) }]);
                setColumn(columnObj);
              }}
              className='flex items-center gap-2 border py-2 px-5 rounded-full'
            >
              <img src='/images/ic-refresh.svg' alt='button' className='h-4' />
              <p className='text-xs text-main-gray'>Refresh</p>
            </button> */}

            <button
              onClick={toggle}
              className='flex items-center gap-2 border py-2 px-5 rounded-full'
            >
              <img src='/images/ic-download.svg' alt='button' className='h-4' />
              <p className='text-xs text-main-gray'>{t("download")}</p>
            </button>
            <Modal isShowing={isShowing} handleModal={toggle} size='sm'>
              <div className=''>
                <div className='flex items-center p-2'>
                  <p className='flex-1 text-center text-xs font-semibold text-black-2'>
                    Download Data
                  </p>
                  <button
                    type='button'
                    className='text-2xl'
                    data-dismiss='modal'
                    aria-label='Close'
                    onClick={toggle}
                  >
                    <span aria-hidden='true' className='text-black-2'>
                      &times;
                    </span>
                  </button>
                </div>
                <hr />
                <div className='py-2 px-4'>
                  <MapTableDownload
                    source='from-table'
                    toggle={toggle}
                    toggledRow={toggledRow}
                    isSelectAll={isSelectAll}
                  />
                </div>
              </div>
            </Modal>
          </div>
          <div className='relative flex items-center'>
            <button onClick={() => setColumnOpt((prev) => !prev)}>
              <img src='/images/ic-add-circle.svg' />
            </button>
            <div
              className={`${
                isColumnOpt ? "max-h-44" : "max-h-0"
              } absolute z-50 -bottom-2 right-0 shadow-style-1 rounded-lg transform translate-y-full overflow-scroll transition-all duration-200 ease-in-out bg-white hide-scrollbar`}
            >
              <div className='py-3 px-2 space-y-2 border border-gray-4 rounded-lg'>
                {columns.map((el, index) => (
                  <div key={el.field} className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      className='focus:ring-main-blue cursor-pointer text-main-blue rounded-md w-5 h-5'
                      checked={el.show}
                      id={el.field}
                      name={el.field}
                      value={el.field}
                      onChange={(e) => {
                        setColums((prev) => {
                          let arr = [...prev];
                          arr[index].show = !arr[index].show;
                          return arr;
                        });
                      }}
                    />
                    <p className='text-main-gray text-xs'>{t(el.title)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <Table
            map={map}
            columns={columns}
            data={dataTable}
            order={order}
            handleOrder={(orderBy, orderAsc) =>
              setOrder({ orderBy: orderBy, orderAsc: orderAsc })
            }
            setToggledRow={setToggledRow}
            toggledRow={toggledRow}
            setPage={setPage}
            setDataTable={setDataTable}
            isSelectAll={isSelectAll}
            setIsSelectAll={setIsSelectAll}
          />
        </div>
      </div>
    </>
  );
};

export default MapTable;
