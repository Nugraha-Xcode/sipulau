import React from "react";
import { SearchSuggestion } from "./SearchSuggestion";
import { Transition } from "@headlessui/react";

const Searcbar = ({
  value,
  setValue,
  getPulau = () => {},
  setSuggestList = () => {},
  suggestList = [],
  onSearch = () => {},
  handleClearValue = () => {},
  handleChangesValue = () => {},
}) => {
  return (
    <div className='w-full h-auto relative'>
      <div
        className={`${
          suggestList.length ? "rounded-b-none" : "rounded-b-[10px]"
        } w-full flex border-[1px] h-10 items-center px-2 border-gray-400 rounded-t-[10px] transition-all duration-300`}
      >
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

      <Transition
        appear={true}
        show={suggestList.length > 0}
        enter='transition-all duration-300 ease-in-out transform'
        enterFrom='opacity-0 -translate-y-3'
        enterTo='opacity-100 translate-y-0'
        leave='transition-all duration-300 ease-in-out transform'
        leaveFrom='opacity-50 translate-y-0'
        leaveTo='opacity-0 -translate-y-3'
      >
        <div className='hide-scrollbar py-2 flex flex-col absolute w-full h-52 max-h-52 overflow-y-scroll overflow-x-hidden bg-white  border-gray-400 border-[1px] rounded-b-[10px] z-40 transition-all'>
          {suggestList.map((el) => (
            <button
              onClick={() => {
                getPulau(el.nammap);
                setSuggestList([]);
              }}
              className='p-2 text-xs hover:bg-[#F2F2F2] text-left'
            >
              {el.nammap}
            </button>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default Searcbar;
