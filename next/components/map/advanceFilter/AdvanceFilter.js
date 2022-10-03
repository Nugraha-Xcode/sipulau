import { Popover } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import shallow from "zustand/shallow";
import { useAdvanceFilter } from "../../../hooks";
import Button from "../../core/Button";
import FilterItem from "./FilterItem";

const AdvanceFilter = () => {
  const { t } = useTranslation("attributetable");
  const [filterItem, setFilterItem] = useAdvanceFilter(
    (state) => [state.filterItem, state.setFilterItem],
    shallow
  );
  console.log(filterItem);

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

  const a = {
    _and: [
      { _and: [] },
      { judul_eng: { _contains: "Mapping" } },
      { judul_idn: { _contains: "Mapping natur" } },
    ],
  };

  const b = {
    _and: [
      { judul_eng: { _contains: "Mapping" } },
      { _and: [] },
      { judul_idn: { _contains: "Mapping natur" } },
    ],
  };

  const d = {
    _and: [
      { date_updated: { _contains: null } },
      {
        _and: [
          { pratinjau_isi_idn: { _contains: null } },
          { user_created: { _eq: null } },
        ],
      },
    ],
  };
  return (
    <div className='py-3 px-6 h-96'>
      <div className='flex items-center justify-between'>
        <p>Filter</p>
        <img src='/images/ic-close.svg' />
      </div>
      <hr />
      <div className='flex flex-col gap-2 mt-5'>
        {Object.keys(filterItem).length > 0 &&
          Object.keys(filterItem).map((el) => (
            <FilterItem key={el} id={el} item={filterItem[el]} />
          ))}
      </div>
      <div className='py-6 flex justify-center'>
        <Popover className='relative'>
          <Popover.Button>+ Add Filter</Popover.Button>

          <Popover.Panel className='absolute z-10'>
            <div className='flex flex-col hide-scrollbar max-h-44 overflow-y-scroll rounded-[8px] py-2 text-gray-600 border text-xs border-gray-600 bg-white'>
              {columnsList.map((el) => (
                <button
                  className='text-left hover:bg-[#F2F2F2] px-4 py-2'
                  onClick={(e) => {
                    e.stopPropagation();
                    let item = {};
                    let generateId = uuidv4();
                    item[generateId] = {};
                    item[generateId]["column"] = el;
                    if (Object.keys(filterItem).length > 0) {
                      setFilterItem({ ...filterItem, ...item });
                    } else {
                      setFilterItem({ ...item });
                    }
                  }}
                >
                  {el.label}
                </button>
              ))}
            </div>
          </Popover.Panel>
        </Popover>
      </div>

      <Button
        variant='normal'
        isActive={true}
        onClick={(e) => {
          e.stopPropagation();
          console.log(filterItem);
        }}
      >
        Set Filter
      </Button>
    </div>
  );
};

export default AdvanceFilter;
