import React from "react";
import { useCrs } from "../../../hooks";
import clsx from "clsx";

const CrsSelectorFeature = () => {
  const crs = useCrs((state) => state.crs);
  const setCrs = useCrs((state) => state.setCrs);
  return (
    <div className='flex flex-col gap-1  max-h-[400px] overflow-y-scroll hide-scrollbar'>
      {[
        { name: "EPSG:4326", projection: "EPSG:4326" },
        { name: "EPSG:4269", projection: "EPSG:4269" },
        { name: "EPSG:3857", projection: "EPSG:3857" },
      ].map((el) => (
        <div
          onClick={() => {
            setCrs(el.projection);
          }}
          className={clsx([
            "flex items-center gap-3 cursor-pointer hover:bg-blue-2 rounded-md p-1",
            { "bg-blue-2": crs === el.projection },
          ])}
        >
          <p className='text-[10px] text-gray-800'>{el.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CrsSelectorFeature;
