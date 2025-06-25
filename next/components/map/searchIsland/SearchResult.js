import React, { useContext } from "react";
import MapContext from "../../../context/MapContext";
const SearchResult = ({ item }) => {
  const { map } = useContext(MapContext);
  return (
    <div
      onClick={() => {
        map.flyTo({
          center: [item.lon, item.lat],
          zoom: 17,
          padding: {
            left: 400,
          },
        });
      }}
      className='flex w-full flex-col gap-1 border p-3 rounded-[10px] cursor-pointer'
    >
      <div className='text-sm font-semibold'>{item.nammap}</div>
      <div className='text-[10px] text-[#777574]'>
        {item.lat.toFixed(7)}, {item.lon.toFixed(7)} <br />
        {item.wadmkk}, {item.wadmpr}
      </div>
    </div>
  );
};

export default SearchResult;
