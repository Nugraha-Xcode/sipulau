import React, { useEffect, useState, useContext } from "react";

import { useTranslation } from "react-i18next";
import LegendItem from "./LegendItem";
import { useDelayUnmount } from "../../utils/useDelayUnmount";
import MapContext from "../../context/MapContext";

const MapLegend = () => {
  const { t } = useTranslation("sideBarRight");
  const { activeLegend } = useContext(MapContext);
  const [isOpen, setIsOpen] = useState(false);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    isOpen && setTimeout(() => setMount(true), 100);
    return () => {
      setMount(false);
    };
  }, [isOpen]);

  const shouldRender = useDelayUnmount(isOpen, 500);

  return (
    <div
      data-cy='map-legend-button'
      className='font-map absolute bottom-6 right-[10px] md:right-6 z-10 shadow-map-1 bg-white rounded-md p-1 flex flex-col gap-1'
    >
      <div
        className='flex gap-2 px-1 md:px-5 py-1 md:py-3 z-20 bg-white cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src='/images/ic-legend.svg'
          alt='legend icon'
          className='w-4 md:w-5'
        />
        <p className='text-sm text-main-gray font-semibold hidden md:flex'>
          {t("legendTitle")}
        </p>
      </div>
      {shouldRender ? (
        <div
          data-cy='map-legend-tab'
          className={`fixed md:absolute left-0 md:-left-2 transform ${
            mount
              ? "translate-y-0 md:-translate-x-full opacity-1"
              : "translate-y-full md:translate-y-0 md:-translate-x-0 opacity-0"
          } bg-white rounded-lg w-screen md:w-[18.5rem] z-50 transition-all duration-500 ease-in-out bottom-0`}
        >
          <div>
            <div className='flex justify-between px-3 py-4'>
              <p className='text-black-2/90 text-xs font-semibold'>
                {t("legendListTitle")}
              </p>
              <button onClick={() => setIsOpen(false)}>
                <img src='/images/ic-union-right.svg' alt='arrow icon' />
              </button>
            </div>
            <hr className='text-gray-4 border-t-2 opacity-40' />
            <div className='p-3 flex flex-col gap-3 max-h-[65vh] md:max-h-[15rem] overflow-y-scroll hide-scrollbar'>
              {activeLegend.map((el, index) => (
                <LegendItem
                  label={el.label}
                  judul={el.judul}
                  key={index + el.label}
                  legendImageUrl={el.legendImageUrl || null}
                  legendList={el.legendList || null}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MapLegend;
