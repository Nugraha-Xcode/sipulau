import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import Table from "../../components/core/table";
import AppContext from "../../context/AppContext";
import MapContext from "../../context/MapContext";
import MemoIcFilter from "../core/icons/IcFilter";
import MemoIcMapFilter from "../core/icons/IcMapFilter";
import Modal from "../modal";
import MapTableDownload from "./MapTableDownload";
import useToggle from "../../utils/useToggle";
import { useAuth } from "../../hooks/useAuth";
import { useAdvanceFilter, useBbox, useDrawAoi } from "../../hooks";
import shallow from "zustand/shallow";
import SelectAoi from "./bottomDrawer/SelectAoi";

const MapTable = ({
  dataTable,
  setDataTable,
  page,
  setPage,
  setToggledRow,
  toggledRow,
  isSelectAll,
  setIsSelectAll,
  setOpenBottomDrawer,
  setExpandBottomDrawer,
}) => {
  const { handleSetSnack } = useContext(AppContext);
  const authToken = useAuth((state) => state.authToken);
  const { t } = useTranslation("attributetable");
  const {
    map,
    queryFilter,
    draw,
    setIsOpenDrawer,
    setActiveFeature,
    setIsOpenFeature,
    toggleMapFilter,
    setQueryFilter,
    activeFilter,
    setActiveFilter,
    setFilterArr,
    setColumn,
    columnObj,
    handleZoomExtend,
  } = useContext(MapContext);

  const [bbox, setBbox] = useBbox(
    (state) => [state.bbox, state.setBbox],
    shallow
  );

  const [advanceFilterQuery, setFilterObject, createQueryFilter] =
    useAdvanceFilter(
      (state) => [
        state.advanceFilterQuery,
        state.setFilterObject,
        state.createQueryFilter,
      ],
      shallow
    );
  const [aoiPoly, setAoiPoly] = useDrawAoi(
    (state) => [state.aoiPoly, state.setAoiPoly],
    shallow
  );

  const [activeTab, setActiveTab] = useState("nama");
  const [isOption, setOption] = useState(false);
  const [isColumnOpt, setColumnOpt] = useState(false);
  const [isShowing, toggle] = useToggle();
  const [fetchTable, setFetchTable] = useState(false);

  const [order, setOrder] = React.useState({
    orderBy: "fid",
    orderAsc: true,
  });
  const [columns, setColums] = useState([
    { title: "column1", field: "fid", show: false, sort: true },
    { title: "column14", field: "id_toponim", show: true, sort: true },
    { title: "column2", field: "id_wilayah", show: true, sort: true },
    { title: "column3", field: "nammap", show: true, sort: true },
    { title: "column13", field: "alias", show: true, sort: true },
    { title: "column17", field: "nambef", show: true, sort: true },
    { title: "column4", field: "artinam", show: false, sort: true },
    { title: "column5", field: "aslbhs", show: false, sort: true },
    { title: "column6", field: "sjhnam", show: false, sort: true },
    { title: "column8", field: "wadmkd", show: false, sort: true },
    { title: "column7", field: "wadmkc", show: false, sort: true },
    { title: "column9", field: "wadmkk", show: true, sort: true },
    { title: "column10", field: "wadmpr", show: true, sort: true },
    { title: "column11", field: "status", show: true, sort: true },
    { title: "column12", field: "remark", show: false, sort: true },
    { title: "column15", field: "luas", show: false, sort: true },
    { title: "column16", field: "pjg_gp", show: false, sort: true },
  ]);

  useEffect(async () => {
    let query = [...advanceFilterQuery];
    bbox &&
      query.push({
        geom: {
          _within_bbox: [bbox.xmin, bbox.ymin, bbox.xmax, bbox.ymax],
        },
      });
    aoiPoly &&
      query.push({
        geom: {
          _within: {
            type: "MultiPolygon",
            coordinates: [aoiPoly.geometry.coordinates],
          },
        },
      });

    try {
      const response = await fetch("/api/titik-pulau", {
        method: "POST",
        body: JSON.stringify({
          page,
          ordBy: order.orderBy,
          ordDir: order.orderAsc ? "ASC" : "DESC",
          ...(query.length > 0 && {
            query: {
              _and: query,
            },
          }),
        }),
        headers: {
          Authorization: "Bearer " + authToken,
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (response.status === 200) {
        if (result.length > 0) {
          setDataTable((prev) => [...prev, ...result]);
          setFetchTable(true);
        } else {
          setFetchTable(false);
        }
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, [
    order.orderBy,
    order.orderAsc,
    page,
    queryFilter,
    advanceFilterQuery,
    bbox,
    aoiPoly,
  ]);

  // const handleZoomTo = useCallback(async () => {
  //   const bboxStr = bbox
  //     ? `${bbox.xmin},${bbox.ymin},${bbox.xmax},${bbox.ymax}`
  //     : null;
  //   // generate fetch query
  //   let fetchQuery = "/api/titik-pulau/extent";
  //   if (toggledRow.length > 0) {
  //     if (isSelectAll) {
  //       fetchQuery += "?unselected=" + toggledRow.map((el) => el.id).join(",");
  //     } else {
  //       fetchQuery += "?selected=" + toggledRow.map((el) => el.id).join(",");
  //     }
  //   } else if (queryFilter || bbox) {
  //     fetchQuery += "?" + queryFilter + (bboxStr ? "&bbox=" + bboxStr : "");
  //   }
  //   // fetch extent
  //   const response = await fetch(fetchQuery, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const result = await response.json();
  //   if (response.status === 200) {
  //     map.fitBounds(
  //       [
  //         [result.xmin, result.ymin], // southwestern corner of the bounds
  //         [result.xmax, result.ymax], // northeastern corner of the bounds
  //       ],
  //       {
  //         padding: { top: 50, bottom: 50, left: 50, right: 50 },
  //         maxZoom: 15.5,
  //       }
  //     );
  //   } else {
  //     throw new Error(result.message);
  //   }
  // }, [toggledRow, queryFilter, bbox, isSelectAll]);

  return (
    <>
      <div className='font-map mt-0'>
        {/* <div className='border-b-2 flex relative px-5'>
       
        </div> */}
        <div className='py-2 px-5 flex justify-between'>
          <div className='flex items-center gap-2'>
            {/* <button
              data-cy='map-table-zoom-to-button'
              onClick={handleZoomTo}
              className='flex items-center gap-2 border-2 border-gray-300 py-2 px-5 rounded-lg h-10'
            >
              <img src='/images/ic-zoom-to.svg' alt='button' className='h-4' />
              <p className='text-xs text-main-gray'>{t("zoom")}</p>
            </button> */}
            {/* <button
              onClick={() => {}}
              className={`flex items-center gap-2 border-2 border-gray-300 h-10 py-2 px-5 rounded-lg`}
            >
              <img src='/images/ic-table.svg' alt='button' className='h-4' />
              <p className='text-xs text-gray-600'>Toponim Pulau</p>
            </button>
            <div className='border-l-2 border-l-gray-200 h-10' /> */}
            <button
              data-cy='map-table-filter-by-map-extend-button'
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
                bbox
                  ? "bg-blue-50 border-blue-500 text-blue-500"
                  : "border-gray-300 text-gray-900"
              } flex items-center gap-2 border-2 h-10 py-2 px-5 rounded-lg `}
            >
              <MemoIcMapFilter />
              <p className='text-xs'>Filter by Map Extent</p>
            </button>
            <div className='relative'>
              <button
                onClick={() => setColumnOpt((prev) => !prev)}
                className={`flex items-center gap-2 border-2 border-gray-300 h-10 py-2 px-5 rounded-lg`}
              >
                <img
                  src='/images/ic-filter-column.svg'
                  alt='button'
                  className='h-4 text-gray-900'
                />
                <p className='text-xs text-gray-900'>Show All Fields</p>
              </button>
              <div
                data-cy='map-table-column-setting-option'
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
            <button
              data-cy='map-table-filter-button'
              onClick={toggleMapFilter}
              className={`flex items-center gap-2 border-2 py-2 px-5 rounded-lg h-10 ${
                queryFilter
                  ? "bg-blue-50 border-blue-500 text-blue-500"
                  : "border-gray-300 text-gray-900"
              }`}
            >
              <MemoIcFilter queryFilter={queryFilter} />
              <p className='text-xs'>{t("filter")}</p>
            </button>
            {(advanceFilterQuery.length > 0 || aoiPoly) && (
              <button
                data-cy='map-table-reset-filter-button'
                onClick={() => {
                  setToggledRow([]);
                  setPage(1);
                  setDataTable([]);
                  setFilterObject({});
                  createQueryFilter();
                  if (aoiPoly) {
                    setAoiPoly(null);
                    draw.delete(aoiPoly.id);
                  }
                  // setIsSelectAll(false);
                  // setActiveFilter([]);
                  // setQueryFilter("");
                  // setDataTable([]);
                  // setFilterArr([{ id: (Math.random() * 10000).toFixed(0) }]);
                  // setColumn(columnObj);
                  // setToggledRow([]);
                }}
                className='flex items-center gap-2 border-2 border-gray-300 h-10 py-2 px-5 rounded-lg'
              >
                <img src='/images/ic-close.svg' alt='button' className='h-4' />
                <p className='text-xs text-gray-900'>{t("resetFilter")}</p>
              </button>
            )}
            <SelectAoi setPage={setPage} setDataTable={setDataTable} />
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
          <div className='relative flex items-center gap-2'>
            {/* <button
              data-cy='map-table-column-setting-button'
              onClick={() => setColumnOpt((prev) => !prev)}
            >
              <img src='/images/ic-add-circle.svg' />
            </button> */}
            {/* <div
              data-cy='map-table-column-setting-option'
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
            </div> */}
            {/* <button
              onClick={() => {}}
              className='border-2 border-gray-300 w-10 h-10 rounded-lg flex items-center justify-center'
            >
              <img src='/images/ic-checkbox.svg' alt='button' className='h-4' />
            </button> */}
            <button
              data-cy='map-table-download-button'
              onClick={toggle}
              className='border-2 border-gray-300 w-10 h-10 rounded-lg flex items-center justify-center'
            >
              <img src='/images/ic-download.svg' alt='button' className='h-4' />
            </button>
            <button
              onClick={setExpandBottomDrawer}
              className='border-2 border-gray-300 w-10 h-10 rounded-lg flex items-center justify-center'
            >
              <img
                src='/images/ic-expand-bottom-drawer.svg'
                alt='expand bottom drawer'
              />
            </button>
            <button
              onClick={() => {
                setOpenBottomDrawer(false);
              }}
              className='border-2 border-gray-300 w-10 h-10 rounded-lg flex items-center justify-center'
            >
              <img src='/images/ic-close.svg' alt='button' />
            </button>
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
            activeFilter={activeFilter}
            fetchTable={fetchTable}
          />
        </div>
      </div>
    </>
  );
};

export default MapTable;
