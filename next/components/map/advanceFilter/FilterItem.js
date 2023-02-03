import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { filterOperatosList } from "../../../constant";
import { useAdvanceFilter } from "../../../hooks";
import useDebounce from "../../../hooks/useDebounce";
import { cityList, provinceList } from "../../../utils/constant";
import DropdownMenu from "../../core/DropdownMenu";

const FilterItem = ({ id, item, columnsList }) => {
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
    let current = filterObject;
    current[id]["value"] = debounceInput;
    setFilterObject(current);
  }, [debounceInput, item]);

  return (
    <div className='flex gap-2 mb-2'>
      <DropdownMenu
        label='Select Column'
        menu={columnsList}
        initialValue={item["column"]}
        onSelect={(value) => {
          setInput("");
          let current = filterObject;
          current[id]["column"] = value;

          if (
            filterObject[id]["column"]["value"] === "wadmpr" ||
            filterObject[id]["column"]["value"] === "wadmkk"
          ) {
            setIsSelector(true);
            current[id]["operator"] = { label: "Equals", value: "_eq" };
            setOperatorValue({ label: "Equals", value: "_eq" });
          } else {
            setIsSelector(false);
            current[id]["operator"] = { label: "Contains", value: "_contains" };
            setOperatorValue({ label: "Contains", value: "_contains" });
          }

          setFilterObject(current);
        }}
        maxH='max-h-52'
      />
      <DropdownMenu
        label='Select Operator'
        menu={filterOperatosList}
        initialValue={operatorValue}
        onSelect={(value) => {
          let current = filterObject;
          current[id]["operator"] = value;
          setFilterObject(current);
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
          let current = filterObject;
          delete current[id];
          setFilterObject({ ...current });
        }}
        className='flex items-center justify-center h-[40px] w-[40px] rounded-[8px] text-gray-600 border text-xs border-gray-600'
      >
        <img src='/images/ic-trash.svg' alt='delete' />
      </button>
    </div>
  );
};

export default FilterItem;
