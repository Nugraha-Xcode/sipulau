import React, { useState, useContext, useCallback } from "react";
import { useTranslation } from "react-i18next";
import MapContext from "../../context/MapContext";
import CustomSubLayerItem from "./CustomSubLayerItem";

const CustomLayerItem = ({ simpulIndex, layer, title, item }) => {
  const { t } = useTranslation("sideBarRight");
  const { activeLayer, setActiveLayer, map } = useContext(MapContext);
  const [isOpen, setIsOpen] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);

  const handleLayerDown = useCallback(() => {
    setActiveLayer((prev) => {
      let prevArr = [...prev];
      prevArr.splice(simpulIndex, 1);
      prevArr.splice(simpulIndex - 1, 0, item);
      return prevArr;
    });
  }, [simpulIndex]);

  const handleLayerUp = useCallback(() => {
    setActiveLayer((prev) => {
      let prevArr = [...prev];
      prevArr.splice(simpulIndex, 1);
      prevArr.splice(simpulIndex + 1, 0, item);
      return prevArr;
    });
  }, [simpulIndex]);

  const handleDeleteGroup = useCallback(() => {
    setActiveLayer((prev) => {
      let prevArr = [...prev];
      return prevArr.filter((el) => el.simpul !== item.simpul);
    });
  }, []);

  return (
    <div
      className={`flex flex-col ${
        isOpen ? "border border-gray-4" : ""
      } px-2 rounded-md overflow-y-scroll hide-scrollbar`}
    >
      <div className='flex gap-3'>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <img
            src='/images/ic-arrow-r.svg'
            alt='arrow icon'
            className={`w-2 ${isOpen ? "transform rotate-90" : ""} transition`}
          />
        </button>
        <p className='flex-1 truncate text-black-2'>{title}</p>
        <div className='flex gap-2'>
          {/* <button>
            <img src='/images/ic-eye.svg' alt='see icon' className='w-4' />
          </button> */}
          <button onClick={() => setOpenSetting((prev) => !prev)}>
            <img src='/images/ic-dots.svg' alt='dots icon' className='w-4' />
          </button>
        </div>
      </div>
      <div
        className={`${
          openSetting ? "max-h-96 mb-2 mt-2" : "max-h-0"
        } overflow-hidden transition-all duration-500 rounded-md`}
      >
        <div className='bg-blue-2 p-2 flex flex-col gap-3'>
          <button
            onClick={handleLayerUp}
            className='flex gap-2 items-center'
            disabled={simpulIndex === activeLayer.length - 1}
          >
            <img src='/images/ic-arrow-t.svg' />
            <p className='text-main-gray text-xs'>{t("optionLayer2")}</p>
          </button>
          <button
            onClick={handleLayerDown}
            className='flex gap-2 items-center'
            disabled={simpulIndex === 0}
          >
            <img src='/images/ic-arrow-b.svg' />
            <p className='text-main-gray text-xs'>{t("optionLayer3")}</p>
          </button>
          <button
            onClick={handleDeleteGroup}
            className='flex gap-2 items-center'
          >
            <img src='/images/ic-trash.svg' />
            <p className='text-main-gray text-xs'>{t("optionLayer4")}</p>
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "max-h-72 mt-2" : "max-h-0 overflow-hidden"
        } transition-all duration-500 ml-5 space-y-0`}
      >
        {layer
          .map((el, index) => (
            <CustomSubLayerItem
              key={el.judul + el.nama}
              layerIndex={index}
              simpulIndex={simpulIndex}
              item={el}
            />
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default CustomLayerItem;
