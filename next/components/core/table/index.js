import { useEffect, useRef, useContext } from "react";
import { useTranslation } from "next-i18next";
import SortIcon from "./SortIcon";

const Table = ({
  columns,
  data,
  order,
  handleOrder,
  setToggledRow,
  toggledRow,
  map,
  setPage,
  setDataTable,
  isSelectAll,
  setIsSelectAll,
  activeFilter,
  fetchTable,
}) => {
  const { t } = useTranslation("attributetable");
  const observerRef = useRef(null);
  const rootObserver = useRef(null);

  useEffect(() => {
    let observer = null;
    if (observerRef.current && data.length >= 20 && fetchTable) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((prev) => prev + 1);
          }
        },
        {
          root: rootObserver.current,
          threshold: 0,
        }
      );
      observer.observe(observerRef.current);
    }
    return () => {
      if (observer && observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [observerRef.current, data, fetchTable]);

  let tableHeight = 600;

  return (
    <div
      data-cy='map-main-table'
      className='min-w-screen tableStyle overflow-auto overscroll-contain'
      ref={rootObserver}
    >
      <table className='w-full text-black-2'>
        <thead>
          <tr className=''>
            <th className='sticky top-0 text-center px-4 bg-gray-50'>
              <input
                type='checkbox'
                className='focus:ring-main-blue cursor-pointer text-main-blue rounded-md w-5 h-5'
                checked={
                  isSelectAll
                  // data.length !== 0 && toggledRow.length === data.length
                }
                id={"select-all"}
                name={"select-all"}
                onChange={(e) => {
                  setIsSelectAll((prev) => !prev);
                  if (!isSelectAll && activeFilter.length > 0) {
                    setToggledRow(
                      data.map((el) => {
                        return {
                          id: el.id_toponim,
                          lon: el.lon,
                          lat: el.lat,
                        };
                      })
                    );
                    setTimeout(() => {
                      map.setLayoutProperty("titikPulauMvt", "icon-image", [
                        "case",
                        [
                          "in",
                          ["id"],
                          [
                            "literal",
                            data.map((el) => parseInt(el.id_toponim)),
                          ],
                        ],
                        "marker-pulau-highlight",
                        "marker-pulau",
                      ]);
                    }, 1000);
                  } else {
                    setToggledRow([]);
                  }
                  // if (!isSelectAll) {
                  //   setTimeout(() => {
                  //     map.setLayoutProperty("titikPulauMvt", "icon-image", [
                  //       "case",
                  //       ["in", ["id"], ""],
                  //       "marker-pulau",
                  //       "marker-pulau-highlight",
                  //     ]);
                  //   }, 1000);
                  // } else {
                  //   setTimeout(() => {
                  //     map.setLayoutProperty("titikPulauMvt", "icon-image", [
                  //       "case",
                  //       ["in", ["id"], ""],
                  //       "marker-pulau-highlight",
                  //       "marker-pulau",
                  //     ]);
                  //   }, 1000);
                  // }
                }}
              />
            </th>
            {columns.map((el, index) =>
              el.show ? (
                <th
                  className='py-3 sticky top-0 min-w-[120px] bg-gray-50'
                  key={index}
                >
                  <div
                    onClick={
                      el.sort === false
                        ? () => {}
                        : () => {
                            setDataTable([]);
                            setPage(1);
                            handleOrder(el.field, !order.orderAsc);
                          }
                    }
                    className='flex items-center justify-between cursor-pointer gap-4'
                  >
                    <p className='text-sm text-left'>{t(el.title)}</p>
                    <SortIcon
                      opacityBottom={
                        el.field === order.orderBy && order.orderAsc === true
                          ? "0.3"
                          : el.field === order.orderBy &&
                            order.orderAsc === false
                          ? "1"
                          : "0.1"
                      }
                      opacityTop={
                        el.field === order.orderBy && order.orderAsc === true
                          ? "1"
                          : el.field === order.orderBy &&
                            order.orderAsc === false
                          ? "0.3"
                          : "0.1"
                      }
                    />
                  </div>
                </th>
              ) : null
            )}
          </tr>
        </thead>
        <tbody
          className={`${
            data.length > 0 ? "divide-solid divide-y-2 divide-gray-6" : ""
          }`}
        >
          {data.length > 0 ? (
            data.map((dataItem, dataIdx) => (
              <tr className='cursor-pointer' key={dataIdx}>
                <td
                  className={`${
                    isSelectAll
                      ? toggledRow.findIndex(
                          (el) => el.id === dataItem.id_toponim
                        ) !== -1
                        ? ""
                        : "bg-blue-2"
                      : toggledRow.findIndex(
                          (el) => el.id === dataItem.id_toponim
                        ) !== -1
                      ? "bg-blue-2"
                      : ""
                  } text-center`}
                >
                  <input
                    type='checkbox'
                    className='focus:ring-main-blue cursor-pointer text-main-blue rounded-md w-5 h-5'
                    checked={
                      // toggledRow.indexOf(dataItem.id_toponim) !== -1
                      isSelectAll
                        ? activeFilter.length > 0
                          ? toggledRow.findIndex(
                              (el) => el.id === dataItem.id_toponim
                            ) !== -1
                            ? true
                            : false
                          : toggledRow.findIndex(
                              (el) => el.id === dataItem.id_toponim
                            ) !== -1
                          ? false
                          : true
                        : toggledRow.findIndex(
                            (el) => el.id === dataItem.id_toponim
                          ) !== -1
                        ? true
                        : false
                    }
                    id={dataItem.id_toponim}
                    name={dataItem.id_toponim}
                    value={
                      // toggledRow.indexOf(dataItem.id_toponim) !== -1
                      isSelectAll
                        ? toggledRow.findIndex(
                            (el) => el.id === dataItem.id_toponim
                          ) !== -1
                          ? false
                          : true
                        : toggledRow.findIndex(
                            (el) => el.id === dataItem.id_toponim
                          ) !== -1
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      if (isSelectAll) {
                        if (e.target.value === "false") {
                          setToggledRow((prev) => {
                            let arr = [...prev];
                            arr.splice(
                              toggledRow.findIndex(
                                (el) => el.id === dataItem.id_toponim
                              ),
                              1
                            );
                            return arr;
                          });
                        } else {
                          setToggledRow((prev) => {
                            let arr = [...prev];
                            arr.push({
                              id: dataItem.id_toponim,
                              lon: dataItem.lon,
                              lat: dataItem.lat,
                            });
                            return arr;
                          });
                        }
                      } else {
                        if (e.target.value === "true") {
                          setToggledRow((prev) => {
                            let arr = [...prev];
                            arr.splice(
                              toggledRow.findIndex(
                                (el) => el.id === dataItem.id_toponim
                              ),
                              1
                            );
                            return arr;
                          });
                        } else {
                          setToggledRow((prev) => {
                            let arr = [...prev];
                            arr.push({
                              id: dataItem.id_toponim,
                              lon: dataItem.lon,
                              lat: dataItem.lat,
                            });
                            return arr;
                          });
                        }
                      }
                    }}
                  />
                </td>
                {columns.map((itemValue, itemIdx) =>
                  itemValue.show ? (
                    <td
                      key={itemIdx}
                      onClick={() =>
                        map.flyTo({
                          center: [dataItem.lon, dataItem.lat],
                          zoom: 12.5,
                        })
                      }
                      test={dataItem[itemValue.field]}
                      className={`${
                        isSelectAll
                          ? toggledRow.findIndex(
                              (el) => el.id === dataItem.id_toponim
                            ) !== -1
                            ? ""
                            : "bg-blue-2"
                          : toggledRow.findIndex(
                              (el) => el.id === dataItem.id_toponim
                            ) !== -1
                          ? "bg-blue-2"
                          : ""
                      } text-left py-[3px] text-xs pr-2 ${
                        dataItem[itemValue.field] &&
                        dataItem[itemValue.field].length > 40
                          ? "hover:relative hover:before:content-[attr(test)] hover:before:overflow-visible before:absolute before:bg-black-2 before:rounded-md before:top-10 before:z-[999] before:text-white hover:before:p-2"
                          : ""
                      } `}
                    >
                      <div className={`line-clamp-2`}>
                        {dataItem[itemValue.field] || "-"}
                      </div>
                    </td>
                  ) : null
                )}
              </tr>
            ))
          ) : (
            <tr className=''>
              <td colSpan={columns.length} className=''>
                <div className='mx-auto flex flex-col justify-center items-center gap-y-2 py-8'>
                  <img
                    src='/images/empty-state-table.svg'
                    alt='empty state table'
                    className='w-44'
                  />
                  <p className='text-sm text-black-2 font-semibold text-center'>
                    {t("emptyStateTable1")}
                  </p>
                  <p className='text-xs text-main-gray w-44 text-center'>
                    {t("emptyStateTable2")}
                  </p>
                </div>
              </td>
            </tr>
          )}
          <tr ref={observerRef}>
            <td className='relative'>
              <div className='absolute w-10 h-10'></div>
            </td>
          </tr>
        </tbody>
      </table>
      <style jsx>
        {`
          .tableStyle {
            height: ${tableHeight + "px"};
          }
        `}
      </style>
    </div>
  );
};

export default Table;
