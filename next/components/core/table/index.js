import { useEffect, useRef, useContext } from "react";
import SortIcon from "./SortIcon";
import MapContext from "../../../context/MapContext";

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
}) => {
  const observerRef = useRef(null);
  const rootObserver = useRef(null);

  useEffect(() => {
    let observer = null;
    if (observerRef.current && data.length >= 20) {
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
  }, [observerRef.current, data]);

  let tableHeight = window.innerHeight / 2;

  return (
    <div
      className='min-w-screen tableStyle overflow-auto overscroll-contain hide-scrollbar'
      ref={rootObserver}
    >
      <table className='w-full text-black-2'>
        <thead>
          <tr className=''>
            <th className='sticky top-0 text-center px-4 bg-blue-3'>
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
                  setToggledRow([]);
                  if (!isSelectAll) {
                    setTimeout(() => {
                      map.setLayoutProperty("titikPulauMvt", "icon-image", [
                        "case",
                        ["in", ["id"], ""],
                        "marker-pulau",
                        "marker-pulau-highlight",
                      ]);
                    }, 1000);
                  } else {
                    setTimeout(() => {
                      map.setLayoutProperty("titikPulauMvt", "icon-image", [
                        "case",
                        ["in", ["id"], ""],
                        "marker-pulau-highlight",
                        "marker-pulau",
                      ]);
                    }, 1000);
                  }
                }}
              />
            </th>
            {columns.map((el, index) =>
              el.show ? (
                <th
                  className='py-3 sticky top-0 min-w-[120px] px-3 bg-blue-3'
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
                    className='flex items-center justify-between gap-4 cursor-pointer'
                  >
                    <p className='text-sm'>{el.title}</p>
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
        <tbody className='divide-solid divide-y-2 divide-gray-6'>
          {data.map((dataItem, dataIdx) => (
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
                    } text-center py-3 text-xs`}
                  >
                    {dataItem[itemValue.field] || "-"}
                  </td>
                ) : null
              )}
            </tr>
          ))}
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
