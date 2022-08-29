import React from "react";
import { Button } from "../../core";

const NetworkResults = ({
  isActive,
  setIsActive,
  key,
  item,
  thumbnailSource,
}) => {
  const DEFAULT_BASEMAP_IMAGE =
    "https://tanahair.indonesia.go.id/arcgis_js_api/library/4.15/esri/themes/base/images/basemap-toggle-64.svg";
  return (
    <div
      className='flex border-[1px] w-full gap-3 p-3 rounded-md text-sm'
      key={key}
    >
      <div className='bg-gray-3 w-1/4 h-16 rounded-lg overflow-hidden'>
        <img
          //  src='https://tanahair.indonesia.go.id/arcgis_js_api/library/4.15/esri/themes/base/images/basemap-toggle-64.svg'
          // src='https://tanahair.indonesia.go.id/proxy/proxy.php?http://jakartasatu.jakarta.go.id/server/rest/services/UTILITAS/Data_Utilitas_View/MapServer/info/thumbnail'
          src={thumbnailSource}
          alt='thumbnail'
          className='object-cover w-20 h-16 '
          onError={(event) => {
            event.target.src = DEFAULT_BASEMAP_IMAGE;
            event.onerror = null;
          }}
        />
      </div>
      <div className='w-3/4 flex flex-col gap-2'>
        <p className='text-xs'>{item.judul}</p>
        <div className='flex gap-2 items-center'>
          <button
            onClick={() => {}}
            className='border border-blue-500 rounded-md text-blue-500 p-2 text-xs hover:bg-blue-100'
          >
            {isActive ? "Layer Added" : "Add Layer"}
          </button>
          <div className='w-1 h-1 rounded-full bg-main-gray' />
          <p className='text-xs'>Detail</p>
        </div>
      </div>
    </div>
  );
};

export default NetworkResults;
