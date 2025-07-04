import React, { useContext, useState, useRef, useEffect } from "react";
import MapContext from "../../../context/MapContext";

const OpacityController = ({ handleDelete, item }) => {
  const { map } = useContext(MapContext);
  const sliderRef = useRef(null);
  const [layerOpacity, setLayerOpacity] = useState(100);

  useEffect(() => {
    if (item.source === "simpul" || item.source === "additional") {
      setLayerOpacity(
        map.getPaintProperty(item.judul + item.nama, "raster-opacity") * 100
      );
    } else if (
      item.source === "upload" &&
      (item.data.features[0].geometry.type === "Point" ||
        item.data.features[0].geometry.type === "MultiPoint")
    ) {
      setLayerOpacity(
        map.getPaintProperty(item.judul + item.nama, "circle-opacity") * 100
      );
    } else if (item.source === "upload") {
      setLayerOpacity(
        map.getPaintProperty(item.judul + item.nama, "line-opacity") * 100
      );
    } else if (item.source === "toponim") {
      setLayerOpacity(
        map.getPaintProperty(item.judul + item.nama, "icon-opacity") * 100
      );
    }
  }, [item]);

  useEffect(() => {
    sliderRef.current.addEventListener("input", (e) => {
      if (item.source === "simpul" || item.source === "additional") {
        map.setPaintProperty(
          item.judul + item.nama,
          "raster-opacity",
          parseInt(e.target.value, 10) / 100
        );
      } else if (
        item.source === "upload" &&
        (item.data.features[0].geometry.type === "Point" ||
          item.data.features[0].geometry.type === "MultiPoint")
      ) {
        map.setPaintProperty(
          item.judul + item.nama,
          "circle-opacity",
          parseInt(e.target.value, 10) / 100
        );
      } else if (item.source === "upload") {
        map.setPaintProperty(
          item.judul + item.nama,
          "line-opacity",
          parseInt(e.target.value, 10) / 100
        );
      } else if (item.source === "toponim") {
        map.setPaintProperty(
          item.judul + item.nama,
          "icon-opacity",
          parseInt(e.target.value, 10) / 100
        );
      }
    });
  }, [map, sliderRef.current, item]);

  return (
    <div className='relative w-full h-[fit-content] flex flex-col justify-center gap-2 bg-[#E7F5FE] px-5 py-3 rounded-[8px]'>
      {/* <div className='flex justify-between w-full h-[fit-content] font-semibold text-base text-[#232221]'>
        <p>Network Data</p>
        <div className='flex gap-6 h-full items-center'>
          <button>
            <IcEye />
          </button>

          <button>
            <img src='/images/icDots.svg' alt='three dots' />
          </button>
        </div>
      </div> */}

      {item.source === "upload" || item.source === "simpul" ? (
        <div className='flex flex-col w-full h-[fit-content] gap-2'>
          {/* <div className='flex gap-3 h-full items-center'>
          <img src='/images/ic-zoom.svg' alt='icon' className='w-4 h-4' />
          <p className='text-gray-500 text-xs'>Zoom to Layer</p>
        </div> */}
          {/* <div className='flex gap-3 h-full items-center'>
          <IcAccordion variant='up' />
          <p>Move Layer Up</p>
        </div>
        <div className='flex gap-3 h-full items-center'>
          <IcAccordion variant='down' />
          <p>Move Layer Down</p>
        </div> */}
          <button
            onClick={handleDelete}
            className='flex gap-3 h-full items-center'
          >
            <img src='/images/ic-trash.svg' alt='icon' className='w-4 h-4' />
            <p className='text-gray-500 text-xs'>Delete</p>
          </button>
        </div>
      ) : null}

      <div className='w-full flex gap-2 justify-between items-center'>
        <img src='/images/ic-transparency.svg' alt='icon' />
        <input
          ref={sliderRef}
          className='flex-1'
          type='range'
          id='vol'
          name='vol'
          min='0'
          max='100'
          value={layerOpacity}
          onChange={(e) => setLayerOpacity(e.target.value)}
        />
        <p className='text-gray-500 text-xs w-5'>{layerOpacity}</p>
      </div>
    </div>
  );
};

export default OpacityController;
