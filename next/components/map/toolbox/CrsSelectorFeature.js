import React from "react";

const CrsSelectorFeature = () => {
  return (
    <div className='flex flex-col gap-1  max-h-[400px] overflow-y-scroll hide-scrollbar'>
      <div className='flex items-center gap-3 cursor-pointer hover:bg-blue-2 rounded-md p-1'>
        <p className='text-[10px] text-gray-800'>CRS EPSG 4326</p>
      </div>
      <div className='flex items-center gap-3 cursor-pointer hover:bg-blue-2 rounded-md p-1'>
        <p className='text-[10px] text-gray-800'>CRS EPSG 4326</p>
      </div>
      <div className='flex items-center gap-3 cursor-pointer hover:bg-blue-2 rounded-md p-1'>
        <p className='text-[10px] text-gray-800'>CRS EPSG 4326</p>
      </div>
    </div>
  );
};

export default CrsSelectorFeature;
