import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { useAdvanceFilter } from "../../../hooks";
import useDebounce from "../../../hooks/useDebounce";
import DropdownMenu from "../../core/DropdownMenu";

const FilterGroupItem = ({ id, item }) => {
  const { t } = useTranslation("attributetable");
  const [filterItem, setFilterItem] = useAdvanceFilter(
    (state) => [state.filterItem, state.setFilterItem],
    shallow
  );

  const [input, setInput] = useState("");
  const debounceInput = useDebounce(input, 500);

  const get = (obj, ...selectors) =>
    [...selectors].map((s) =>
      s
        .replace(/\[([^\[\]]*)\]/g, ".$1.")
        .split(".")
        .filter((t) => t !== "")
        .reduce((prev, cur) => prev && prev[cur], obj)
    );

  useEffect(() => {
    const newFilterItem = { ...filterItem };
    let a = [];
    item["parents"].forEach((el) => a.push(el, "members"));

    const b = get(newFilterItem, a.toString().replace(/,/g, "."));

    b[0][id]["value"] = debounceInput;
    setFilterItem({ ...newFilterItem });
  }, [debounceInput, item]);

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

  const filterOperatosList = [
    { label: "Equals", value: "_eq" },
    { label: "Doesn't equal", value: "_neq" },
    { label: "Less than", value: "_lt" },
    { label: "Less than or equal to", value: "_lte" },
    { label: "Greater than", value: "_gt" },
    { label: "Greater than or equal to", value: "_gte" },
    { label: "Contains", value: "_contains" },
    { label: "Doesn't contain", value: "_ncontains" },
  ];

  return (
    <div className='flex gap-2 mb-2'>
      <DropdownMenu
        label='Select Column'
        menu={columnsList}
        initialValue={item["column"]}
        onSelect={(value) => {
          const newFilterItem = { ...filterItem };
          let a = [];
          item["parents"].forEach((el) => a.push(el, "members"));

          const b = get(newFilterItem, a.toString().replace(/,/g, "."));

          b[0][id]["column"] = value;
          setFilterItem({ ...newFilterItem });
        }}
        maxH='max-h-52'
      />
      <DropdownMenu
        label='Select Operator'
        menu={filterOperatosList}
        onSelect={(value) => {
          const newFilterItem = { ...filterItem };
          let a = [];
          item["parents"].forEach((el) => a.push(el, "members"));

          const b = get(newFilterItem, a.toString().replace(/,/g, "."));

          b[0][id]["operator"] = value;
          setFilterItem({ ...newFilterItem });
        }}
        maxH='max-h-52'
      />
      <input
        type='text'
        placeholder='-'
        onChange={(e) => setInput(e.target.value)}
        className='h-[40px] rounded-[8px] px-4 py-2 text-gray-600 border text-xs border-gray-600 focus:ring-0'
      />
      <button
        onClick={() => {
          const newFilterItem = { ...filterItem };
          let a = [];
          item["parents"].forEach((el) => a.push(el, "members"));

          const b = get(newFilterItem, a.toString().replace(/,/g, "."));

          delete b[0][id];

          setFilterItem({ ...newFilterItem });
        }}
        className='flex items-center justify-center h-[40px] w-[40px] rounded-[8px] text-gray-600 border text-xs border-gray-600'
      >
        <img src='/images/ic-trash.svg' alt='delete' />
      </button>
    </div>
  );
};

export default FilterGroupItem;
