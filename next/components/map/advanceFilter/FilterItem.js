import React, { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { filterOperatosList } from "../../../constant";
import { useAdvanceFilter } from "../../../hooks";
import useDebounce from "../../../hooks/useDebounce";
import DropdownMenu from "../../core/DropdownMenu";

const FilterItem = ({ id, item, columnsList }) => {
  const [filterObject, setFilterObject] = useAdvanceFilter(
    (state) => [state.filterObject, state.setFilterObject],
    shallow
  );
  const [input, setInput] = useState(item["value"] || "");

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
          let current = filterObject;
          current[id]["column"] = value;
          setFilterObject(current);
        }}
        maxH='max-h-52'
      />
      <DropdownMenu
        label='Select Operator'
        menu={filterOperatosList}
        initialValue={item["operator"]}
        onSelect={(value) => {
          let current = filterObject;
          current[id]["operator"] = value;
          setFilterObject(current);
        }}
        maxH='max-h-52'
      />
      <input
        type='text'
        placeholder='-'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='h-[40px] rounded-[8px] px-4 py-2 text-gray-600 border text-xs border-gray-600 focus:ring-0'
      />
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
