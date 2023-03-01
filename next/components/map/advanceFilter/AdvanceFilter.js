import { Popover } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import React, { useContext } from "react";
import shallow from "zustand/shallow";
import { useAdvanceFilter, useDrawAoi, useTable } from "../../../hooks";
import Button from "../../core/Button";
import FilterItem from "./FilterItem";
import FilterGroupItem from "./FilterGroupItem";
import { filterGroupList } from "../../../constant";
import MapContext from "../../../context/MapContext";

const AdvanceFilter = ({
  handleClose,
  handleViewTable,
  isOpenBottomDrawer,
}) => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["attributetable", "map"] };
    return t(key, params);
  };
  const { draw } = useContext(MapContext);
  const [deleteDataTable, setPage, clearSelectedRow, setFilterId] = useTable(
    (state) => [
      state.deleteDataTable,
      state.setPage,
      state.clearSelectedRow,
      state.setFilterId,
    ],
    shallow
  );

  const [aoiPoly, setAoiPoly] = useDrawAoi(
    (state) => [state.aoiPoly, state.setAoiPoly],
    shallow
  );
  const [
    filterObject,
    setFilterObject,
    addFilterMain,
    addGroupMain,
    addFilterItem,
    addGroupItem,
    addFilterItemNested,
    addGroupItemNested,
    deleteGroup,
    deleteGroupNested,
    createQueryFilter,
    advanceFilterQuery,
  ] = useAdvanceFilter(
    (state) => [
      state.filterObject,
      state.setFilterObject,
      state.addFilterMain,
      state.addGroupMain,
      state.addFilterItem,
      state.addGroupItem,
      state.addFilterItemNested,
      state.addGroupItemNested,
      state.deleteGroup,
      state.deleteGroupNested,
      state.createQueryFilter,
      state.advanceFilterQuery,
    ],
    shallow
  );

  const columnsList = [
    { label: translatedText("column1"), value: "fid" },
    { label: translatedText("column14"), value: "id_toponim" },
    { label: translatedText("column2"), value: "id_wilayah" },
    { label: translatedText("column3"), value: "nammap" },
    { label: translatedText("column13"), value: "alias" },
    { label: translatedText("column17"), value: "nambef" },
    { label: translatedText("column4"), value: "artinam" },
    { label: translatedText("column5"), value: "aslbhs" },
    { label: translatedText("column6"), value: "sjhnam" },
    { label: translatedText("column8"), value: "wadmkd" },
    { label: translatedText("column7"), value: "wadmkc" },
    { label: translatedText("column9"), value: "wadmkk" },
    { label: translatedText("column10"), value: "wadmpr" },
    { label: translatedText("column11"), value: "status" },
    { label: translatedText("column12"), value: "remark" },
    { label: translatedText("column15"), value: "luas" },
    { label: translatedText("column16"), value: "pjg_gp" },
  ];

  const handleGroupFilter = (members) => (
    <div className='flex flex-col'>
      {Object.entries(members).map((membersEl) => {
        let memberId = membersEl[0];
        let memberValue = membersEl[1];
        if (memberValue["group"]) {
          return (
            <div style={{ marginLeft: "16px" }}>
              <div className='flex items-center gap-2'>
                <div className='text-gray-600'>
                  {memberValue["group"]["label"]}
                </div>
                <Popover className='relative'>
                  <Popover.Button className='text-blue-500 text-[10px] focus:outline-none flex items-center'>
                    + {translatedText("filter.addFilter")}
                  </Popover.Button>
                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {columnsList.map((columnEl) => (
                          <button
                            key={columnEl.value}
                            className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                            onClick={() => {
                              addFilterItemNested(
                                columnEl,
                                memberId,
                                memberValue
                              );
                              close();
                            }}
                          >
                            {columnEl.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </Popover.Panel>
                </Popover>
                <Popover className='relative'>
                  <Popover.Button className='text-blue-500 text-[10px] focus:outline-none flex items-center'>
                    + {translatedText("filter.addGroup")}
                  </Popover.Button>
                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {filterGroupList.map((el) => (
                          <button
                            key={el.value}
                            className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                            onClick={() => {
                              addGroupItemNested(el, memberId, memberValue);
                              close();
                            }}
                          >
                            {el.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </Popover.Panel>
                </Popover>
                <button
                  className='text-blue-500 text-[10px] focus:outline-none'
                  onClick={() => {
                    deleteGroupNested(memberId, memberValue);
                  }}
                >
                  Delete
                </button>
              </div>
              {memberValue["members"] &&
                handleGroupFilter(memberValue["members"])}
            </div>
          );
        } else {
          return (
            <div style={{ marginLeft: "16px" }}>
              <FilterGroupItem
                key={memberId}
                id={memberId}
                item={memberValue}
                columnsList={columnsList}
              />
            </div>
          );
        }
      })}
    </div>
  );

  const renderFilterItem = () => (
    <div className='flex flex-col mt-5'>
      {Object.entries(filterObject).map((filterItemEl) => {
        let filterItemId = filterItemEl[0];
        let filterItemValue = filterItemEl[1];
        if (filterItemValue["group"]) {
          return (
            <>
              <div className='flex items-center gap-2'>
                <p className='text-gray-600'>
                  {filterItemValue["group"]["label"]}
                </p>
                <Popover className='relative'>
                  <Popover.Button className='text-blue-500 text-[10px] focus:outline-none flex items-center'>
                    + {translatedText("filter.addFilter")}
                  </Popover.Button>
                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {columnsList.map((columnEl) => (
                          <button
                            key={columnEl.value}
                            className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                            onClick={() => {
                              addFilterItem(columnEl, filterItemId);
                              close();
                            }}
                          >
                            {columnEl.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </Popover.Panel>
                </Popover>
                <Popover className='relative'>
                  <Popover.Button className='text-blue-500 text-[10px] focus:outline-none flex items-center'>
                    + {translatedText("filter.addGroup")}
                  </Popover.Button>

                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {filterGroupList.map((el) => (
                          <button
                            key={el.value}
                            className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                            onClick={() => {
                              addGroupItem(el, filterItemId);
                              close();
                            }}
                          >
                            {el.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </Popover.Panel>
                </Popover>
                <button
                  className='text-blue-500 text-[10px] focus:outline-none'
                  onClick={() => {
                    deleteGroup(filterItemId);
                  }}
                >
                  Delete
                </button>
              </div>
              {filterItemValue["members"] &&
                handleGroupFilter(filterItemValue["members"])}
            </>
          );
        } else {
          return (
            <FilterItem
              key={filterItemId}
              id={filterItemId}
              item={filterItemValue}
              columnsList={columnsList}
            />
          );
        }
      })}
    </div>
  );

  return (
    <div className='py-5 px-6 min-h-[20rem]'>
      <div className='flex items-center justify-between'>
        <p>{translatedText("filter.tittleFilter")}</p>
        <button className='focus:outline-none' onClick={handleClose}>
          <img src='/images/ic-close.svg' alt='close' />
        </button>
      </div>
      <hr />

      {Object.keys(filterObject).length > 0 && renderFilterItem()}

      <div className='mt-5 flex flex-col gap-2'>
        <div className='flex justify-start'>
          <Popover className='relative'>
            <Popover.Button className='text-blue-500 text-sm focus:outline-none'>
              + {translatedText("filter.addFilter")}
            </Popover.Button>

            <Popover.Panel
              className={`${
                Object.keys(filterObject).length > 0
                  ? "absolute bottom-0 z-10"
                  : "absolute z-10"
              }`}
            >
              {({ close }) => (
                <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                  {columnsList.map((el) => (
                    <button
                      key={el.value}
                      className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                      onClick={() => {
                        addFilterMain(el);
                        close();
                      }}
                    >
                      {el.label}
                    </button>
                  ))}
                </div>
              )}
            </Popover.Panel>
          </Popover>
        </div>

        <Button
          variant='normal'
          isActive={true}
          onClick={() => {
            if (!Object.keys(filterObject).length > 0) {
              setFilterId([]);
            }
            clearSelectedRow();
            setPage(1);
            deleteDataTable();
            createQueryFilter();
            if (!isOpenBottomDrawer) {
              handleViewTable();
            }
            handleClose();
          }}
        >
          {translatedText("filter.setFilter")}
        </Button>

        {Object.keys(filterObject).length > 0 && (
          <Button
            variant='outline'
            isActive={false}
            onClick={() => {
              clearSelectedRow();
              setPage(1);
              deleteDataTable();
              setFilterObject({});
              setFilterId([]);
              createQueryFilter();
              if (aoiPoly) {
                setAoiPoly(null);
                draw.delete(aoiPoly.id);
              }
            }}
          >
            {translatedText("filter.resetFilter")}
          </Button>
        )}

        <div className='flex justify-start'>
          <Popover className='relative'>
            <Popover.Button className='text-blue-500 text-sm focus:outline-none'>
              + {translatedText("filter.addGroup")}
            </Popover.Button>

            <Popover.Panel className='absolute z-10'>
              {({ close }) => (
                <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll py-2 rounded-[8px] text-gray-600 border text-xs border-gray-600 bg-white'>
                  {filterGroupList.map((el) => (
                    <button
                      key={el.value}
                      className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                      onClick={() => {
                        addGroupMain(el);
                        close();
                      }}
                    >
                      {el.label}
                    </button>
                  ))}
                </div>
              )}
            </Popover.Panel>
          </Popover>
        </div>

        <div className='bg-gray-50 rounded-[4px] p-2 text-gray-600 flex flex-col gap-2 mt-4'>
          <p className='text-sm font-medium'>
            {translatedText("filter.howTo")}
          </p>
          <ul className='list-disc list-inside text-xs'>
            <li>{translatedText("filter.howTo1")}</li>
            <li
              dangerouslySetInnerHTML={{
                __html: translatedText("filter.howTo2"),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: translatedText("filter.howTo3"),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: translatedText("filter.howTo4"),
              }}
            />
          </ul>
        </div>

        <div className='h-5' />
      </div>
    </div>
  );
};

export default AdvanceFilter;
