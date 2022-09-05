import React, { useContext } from "react";
import MapContext from "../../../../../context/MapContext";
// import Slider from "./Slider";

const SearchResult = ({ item }) => {
  const { map } = useContext(MapContext);
  return (
    <div
      onClick={() => {
        map.flyTo({
          center: [item.lon, item.lat],
          zoom: 16,
          padding: {
            left: 400,
          },
        });
      }}
      className='flex w-full flex-col gap-1 border p-3 rounded-[10px] cursor-pointer'
    >
      <div className='text-sm font-semibold'>{item.nammap}</div>
      <div className='text-[10px] text-[#777574]'>
        {item.lat.toFixed(7)}, {item.lon.toFixed(7)}
      </div>
      {/* <div className='w-full h-[fit-content] flex justify-center items-center'>
        <Slider data={imageData} />
      </div> */}
      {/* <div className='flex flex-col gap-1'>
        <div className='cursor-pointer text-[#4086EF]'>
          <a onClick={onDetail}>{name}</a>
        </div>
      </div> */}
    </div>
  );
};

export default SearchResult;
