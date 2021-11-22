import React, { useState } from "react";
import CustomSubLayerItem from "./CustomSubLayerItem";

const CustomLayerItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`flex flex-col ${
        isOpen ? "border border-gray-4" : ""
      } p-2 rounded-md overflow-y-scroll hide-scrollbar`}
    >
      <div className='flex gap-3'>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <img
            src='/images/ic-arrow-r.svg'
            alt='arrow icon'
            className={`w-2 ${isOpen ? "transform rotate-90" : ""} transition`}
          />
        </button>
        <p className='flex-1 truncate'>
          Layer Indeks Rupabumi Indonesia dfdfdsfd fdsfdsf
        </p>
        <div className='flex gap-2'>
          <button>
            <img src='/images/ic-eye.svg' alt='see icon' className='w-4' />
          </button>
          <button>
            <img src='/images/ic-dots.svg' alt='dots icon' className='w-4' />
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "max-h-72" : "max-h-0 overflow-hidden"
        } transition-all duration-500 ml-5`}
      >
        <CustomSubLayerItem />
        <CustomSubLayerItem />
      </div>
    </div>
  );
};

export default CustomLayerItem;
