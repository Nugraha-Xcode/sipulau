import React, { useState } from "react";

const LegendItem = ({ label, legendImageUrl, legendList, judul }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className='text-sm text-black-2/90 font-semibold'>{label}</p>
        <img
          src='/images/ic-arrow-r.svg'
          alt='arrow icon'
          className={`transform ${
            isOpen ? "rotate-90" : "rotate-0"
          } transition-transform duration-300 ease-in-out`}
        />
      </div>
      <div
        className={`${
          isOpen ? "max-h-32" : "max-h-0"
        } overflow-scroll hide-scrollbar transition-all duration-500`}
      >
        {legendImageUrl ? (
          <div className='p-2 space-y-2'>
            <p className='text-xs text-main-gray/80 font-normal'>{judul}</p>
            <img src={legendImageUrl} alt='legend image' className='ml-2' />
          </div>
        ) : null}
        {legendList
          ? legendList.map((el) => (
              <div key={el.layerId} className='p-2 space-y-2'>
                <p>{el.layerName}</p>
                <img
                  src={`data:${el.legend[0].contentType};base64,${el.legend[0].imageData}`}
                  alt='legend image'
                  className='ml-2'
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default LegendItem;
