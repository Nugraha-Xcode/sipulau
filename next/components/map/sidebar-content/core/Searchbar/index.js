import React from "react";
import { SearchSuggestion } from "./SearchSuggestion";
import { Transition } from "@headlessui/react";

const Searcbar = ({
  value,
  setValue,
  hasSuggestion = true,
  onSearch,
  handleClearValue,
  handleChangesValue,
}) => {
  return (
    <div className='w-full h-auto relative'>
      <div className='w-full  flex border-[1px] h-10 rounded-[10px] items-center px-2 border-gray-400'>
        <input
          className='w-full h-full focus:outline-none text-xs'
          placeholder='Enter keyword or Coordinate'
          onChange={(e) => handleChangesValue(e)}
          value={value}
        />

        {value && (
          <div className='w-[fit-content] flex items-center  h-full px-2 gap-1'>
            <button className='w-5 h-4' onClick={handleClearValue}>
              <img
                src='/images/ic-close.svg'
                alt='close button'
                className='w-4 h-4'
              />
            </button>

            <div className='w-[1px] h-5 bg-gray-300' />
          </div>
        )}

        <button onClick={onSearch}>
          <img
            src='/images/ic-search.svg'
            alt='search Button'
            className='w-5 h-5'
          />
        </button>
      </div>

      {/* if there is a value on input searchbar */}
      {/* {hasSuggestion && value && (
        <div className='flex flex-col absolute w-full h-[fit-content] bg-white  border-gray-400 border-[1px] rounded-b-[10px] z-40 transition-all'>
          <SearchSuggestion>Pulau Seribu</SearchSuggestion>
          <SearchSuggestion>kecamatan pulau seribu</SearchSuggestion>
          <SearchSuggestion>kepulauan seribu</SearchSuggestion>
        </div>
      )} */}
    </div>
  );
};

export default Searcbar;
