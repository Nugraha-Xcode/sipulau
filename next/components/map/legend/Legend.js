import React from "react";
import LegendList from "./LegendList";

const Legend = ({ isOpen, setOpen }) => {
  return (
    <div className='absolute right-4 top-6 z-50 flex flex-col gap-3'>
      <button
        onClick={setOpen}
        className='flex h-10 w-10 items-center justify-center rounded-[4px] bg-white'
      >
        <img src='/images/ic-map-legend.svg' alt='legend' className='w-4 h-4' />
      </button>
      <LegendList isOpen={isOpen} />
    </div>
  );
};

export default Legend;
