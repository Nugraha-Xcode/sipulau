import React, { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { useDownloadAoi, useNetwork } from "../../../hooks";

const LayerListDownload = () => {
  const [activeLayer] = useNetwork((state) => [state.activeLayer], shallow);
  const [list, setList] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectLayer] = useDownloadAoi((state) => [state.selectLayer], shallow);

  useEffect(() => {
    selectLayer(null);
  }, []);

  useEffect(() => {
    if (selected) {
      selectLayer(selected);
    }
  }, [selected]);

  useEffect(() => {
    const filterList = activeLayer.filter(
      (el) =>
        el.source === "upload" &&
        (el.data.features[0].geometry.type === "MultiPolygon" ||
          el.data.features[0].geometry.type === "Polygon")
    );
    if (filterList.length) {
      setList(filterList);
    } else {
      setSelected(null);
      setList(null);
    }
  }, [activeLayer]);

  return (
    <div className=' bg-white w-full h-full p-3 rounded-[8px]'>
      {list ? (
        <div className='flex flex-col gap-2'>
          <p>Layer List:</p>
          {list.map((el) => (
            <div className='flex gap-2 items-center text-[#4F4C4A] text-sm'>
              <input
                type='radio'
                id={el.judul + el.nama}
                name='uploadLayer'
                value={el.judul + el.nama}
                onChange={() => setSelected(el)}
              />
              <label for={el.judul + el.nama}>{el.judul}</label>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex justify-center w-full h-full p-5 border-dotted border-[1px] items-center text-center text-sm text-[#B4B2AF]'>
          No Layer from Uploaded Data to Show.
        </div>
      )}
    </div>
  );
};

export default LayerListDownload;
