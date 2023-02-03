import React, { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { filterOperatosList } from "../../../constant";
import { useAdvanceFilter } from "../../../hooks";
import useDebounce from "../../../hooks/useDebounce";
import DropdownMenu from "../../core/DropdownMenu";
import { getDeepObjectValue } from "../../../utils/function";
import { cityList, provinceList } from "../../../utils/constant";
import { useTranslation } from "next-i18next";

const FilterGroupItem = ({ id, item, columnsList }) => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["map"] };
    return t(key, params);
  };
  const [filterObject, setFilterObject] = useAdvanceFilter(
    (state) => [state.filterObject, state.setFilterObject],
    shallow
  );

  const [input, setInput] = useState(item["value"] || "");
  const [operatorValue, setOperatorValue] = useState(item["operator"]);
  const [isSelector, setIsSelector] = useState(
    item["column"]["value"] === "wadmpr" || item["column"]["value"] === "wadmkk"
  );
  const debounceInput = useDebounce(input, 500);

  useEffect(() => {
    const newFilterItem = { ...filterObject };
    let a = [];
    item["parents"].forEach((el) => a.push(el, "members"));
    const b = getDeepObjectValue(
      newFilterItem,
      a.toString().replace(/,/g, ".")
    );

    b[0][id]["value"] = debounceInput;
    setFilterObject({ ...newFilterItem });
  }, [debounceInput, item]);

  return (
    <div className='flex gap-2 mb-2'>
      <DropdownMenu
        label='Select Column'
        menu={columnsList}
        initialValue={item["column"]}
        onSelect={(value) => {
          setInput("");
          const newFilterItem = { ...filterObject };
          let a = [];
          item["parents"].forEach((el) => a.push(el, "members"));

          const b = getDeepObjectValue(
            newFilterItem,
            a.toString().replace(/,/g, ".")
          );

          b[0][id]["column"] = value;
          if (
            b[0][id]["column"]["value"] === "wadmpr" ||
            b[0][id]["column"]["value"] === "wadmkk"
          ) {
            setIsSelector(true);
            b[0][id]["operator"] = { label: "Equals", value: "_eq" };
            setOperatorValue({ label: "Equals", value: "_eq" });
          } else {
            setIsSelector(false);
            b[0][id]["operator"] = { label: "Contains", value: "_contains" };
            setOperatorValue({ label: "Contains", value: "_contains" });
          }
          setFilterObject({ ...newFilterItem });
        }}
        maxH='max-h-52'
      />
      <DropdownMenu
        label='Select Operator'
        menu={filterOperatosList}
        initialValue={operatorValue}
        onSelect={(value) => {
          const newFilterItem = { ...filterObject };
          let a = [];
          item["parents"].forEach((el) => a.push(el, "members"));

          const b = getDeepObjectValue(
            newFilterItem,
            a.toString().replace(/,/g, ".")
          );

          b[0][id]["operator"] = value;
          setFilterObject({ ...newFilterItem });
        }}
        maxH='max-h-52'
        disabled={isSelector}
      />
      {isSelector ? (
        <DropdownMenu
          label={
            item["column"]["value"] === "wadmpr"
              ? translatedText("filter.selectProvince")
              : translatedText("filter.selectCity")
          }
          menu={item["column"]["value"] === "wadmpr" ? provinceList : cityList}
          initialValue={
            item["column"]["value"] === "wadmpr"
              ? provinceList.filter((el) => el.value === item["value"])[0]
              : cityList.filter((el) => el.value === item["value"])[0]
          }
          onSelect={(value) => {
            setInput(value["value"]);
          }}
          maxH='max-h-52'
        />
      ) : (
        <input
          type='text'
          placeholder='-'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='h-[40px] rounded-[8px] px-4 py-2 text-gray-600 border text-xs border-gray-600 focus:ring-0'
        />
      )}
      <button
        onClick={() => {
          const newFilterItem = { ...filterObject };
          let a = [];
          item["parents"].forEach((el) => a.push(el, "members"));

          const b = getDeepObjectValue(
            newFilterItem,
            a.toString().replace(/,/g, ".")
          );

          delete b[0][id];

          setFilterObject({ ...newFilterItem });
        }}
        className='flex items-center justify-center h-[40px] w-[40px] rounded-[8px] text-gray-600 border text-xs border-gray-600'
      >
        <img src='/images/ic-trash.svg' alt='delete' />
      </button>
    </div>
  );
};

export default FilterGroupItem;
