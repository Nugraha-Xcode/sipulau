import React from "react";

const LegendItem = ({ label, legendImageUrl, legendList, judul }) => {
  return (
    <div className='pt-2 flex flex-col gap-2'>
      <p className='text-xs text-gray-700 font-semibold'>{label}</p>
      {legendImageUrl ? (
        <div className='p-2 space-y-2'>
          <p className='text-xs text-main-gray/80 font-normal'>{judul}</p>
          <img src={legendImageUrl} alt='legend image' className='ml-2' />
        </div>
      ) : null}
      <div className='flex flex-col gap-1'>
        {legendList
          ? legendList.map((el) => (
              <div key={el.layerId} className='flex items-center gap-2'>
                <img
                  src={`data:${el.legend[0].contentType};base64,${el.legend[0].imageData}`}
                  alt='legend image'
                />
                <p className='text-xs'>{el.layerName}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default LegendItem;
