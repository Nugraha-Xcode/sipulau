import { Popover } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import React from "react";
import shallow from "zustand/shallow";
import { useAdvanceFilter } from "../../../hooks";
import Button from "../../core/Button";
import FilterItem from "./FilterItem";
import FilterGroupItem from "./FilterGroupItem";
import { filterGroupList } from "../../../constant";

const AdvanceFilter = ({
  handleClose,
  setDataTable,
  setPage,
  setToggledRow,
}) => {
  const { t } = useTranslation("attributetable");
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
    { label: t("column1"), value: "fid" },
    { label: t("column14"), value: "id_toponim" },
    { label: t("column2"), value: "id_wilayah" },
    { label: t("column3"), value: "nammap" },
    { label: t("column13"), value: "alias" },
    { label: t("column17"), value: "beforename" },
    { label: t("column4"), value: "artinam" },
    { label: t("column5"), value: "aslbhs" },
    { label: t("column6"), value: "sjhnam" },
    { label: t("column8"), value: "wadmkd" },
    { label: t("column7"), value: "wadmkc" },
    { label: t("column9"), value: "wadmkk" },
    { label: t("column10"), value: "wadmpr" },
    { label: t("column11"), value: "status" },
    { label: t("column12"), value: "remark" },
    { label: t("column15"), value: "luas" },
    { label: t("column16"), value: "pjg_gp" },
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
                    + Add Filter
                  </Popover.Button>
                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {columnsList.map((columnEl) => (
                          <button
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
                    + Add Group
                  </Popover.Button>
                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {filterGroupList.map((el) => (
                          <button
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
                    + Add Filter
                  </Popover.Button>
                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {columnsList.map((columnEl) => (
                          <button
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
                    + Add Group
                  </Popover.Button>

                  <Popover.Panel className='absolute z-10'>
                    {({ close }) => (
                      <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
                        {filterGroupList.map((el) => (
                          <button
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
        <p>Filter</p>
        <button className='focus:outline-none' onClick={handleClose}>
          <img src='/images/ic-close.svg' alt='close' />
        </button>
      </div>
      <hr />

      {Object.keys(filterObject).length > 0 && renderFilterItem()}

      <div className='mt-5 flex flex-col gap-2'>
        <div className='flex justify-center'>
          <Popover className='relative'>
            <Popover.Button className='text-blue-500 text-sm focus:outline-none'>
              + Add Group
            </Popover.Button>

            <Popover.Panel className='absolute z-10'>
              {({ close }) => (
                <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll py-2 rounded-[8px] text-gray-600 border text-xs border-gray-600 bg-white'>
                  {filterGroupList.map((el) => (
                    <button
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

        <div className='flex justify-center'>
          <Popover className='relative'>
            <Popover.Button className='text-blue-500 text-sm focus:outline-none'>
              + Add Filter
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
            setToggledRow([]);
            setPage(1);
            setDataTable([]);
            createQueryFilter();
            handleClose();
          }}
        >
          Set Filter
        </Button>

        {Object.keys(filterObject).length > 0 && (
          <Button
            variant='outline'
            isActive={false}
            onClick={() => {
              setFilterObject({});
              createQueryFilter();
            }}
          >
            Reset Filter
          </Button>
        )}
        <div className='h-5' />
      </div>
    </div>
  );
};

export default AdvanceFilter;
