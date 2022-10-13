import React, { useContext, useCallback } from "react";
import { useTranslation } from "react-i18next";
import FilterItem from "./FilterItem";
import MapContext from "../../context/MapContext";
import { useTable } from "../../hooks";

const Filter = ({ toggleMapFilter, setToggledRow }) => {
  const { t } = useTranslation("attributetable");
  const { activeFilter, setQueryFilter, setFilterArr, filterArr } =
    useContext(MapContext);
  const deleteDataTable = useTable((state) => state.deleteDataTable);
  const setPage = useTable((state) => state.setPage);

  const handleFilter = useCallback(() => {
    setToggledRow([]);
    setPage(1);
    deleteDataTable();
    if (filterArr.length > 0 && activeFilter.length > 0) {
      let queryStr = "";
      activeFilter.forEach((el) => {
        queryStr += "&" + el.value + "=" + el.content;
      });
      setQueryFilter(queryStr);
      toggleMapFilter();
    }
  }, [filterArr, activeFilter]);

  return (
    <div className='font-map' data-cy='find-island-filter-modal'>
      <div className='flex justify-between items-center px-6 py-3 relative'>
        <p className='flex-1 text-center ml-5 text-black-2'>{t("filter1")}</p>
        <button onClick={toggleMapFilter}>
          <img src='/images/ic-close.svg' alt='close button' className='w-3' />
        </button>
      </div>
      <hr />
      <div className='p-5 space-y-5'>
        <div className='flex justify-center'>
          <button
            onClick={() => {
              setFilterArr((prev) => [
                ...prev,
                { id: (Math.random() * 10000).toFixed(0) },
              ]);
            }}
            className='flex gap-2 items-center justify-center'
          >
            <img src='/images/ic-add-circle.svg' alt='add filter' />
            <p className='text-main-gray'>{t("filter2")}</p>
          </button>
        </div>
        <div className='border rounded-lg py-3 px-5 flex flex-col gap-2 h-96 overflow-y-scroll hide-scrollbar'>
          {filterArr.map((el) => (
            <div key={el.id} className='flex gap-3'>
              <FilterItem
                idItem={el.id}
                initType={el.selectObj}
                initValue={el.content}
              />
            </div>
          ))}
        </div>
      </div>
      <hr className='' />
      <div className='flex items-center justify-center py-5'>
        <button
          onClick={handleFilter}
          className={`${
            filterArr.length > 0 && activeFilter.length > 0
              ? "bg-opacity-100"
              : "bg-opacity-25"
          } bg-main-blue text-white py-4 rounded-lg w-1/2`}
          disabled={
            filterArr.length > 0 && activeFilter.length > 0 ? false : true
          }
        >
          {t("filter3")}
        </button>
      </div>
    </div>
  );
};

export default Filter;
