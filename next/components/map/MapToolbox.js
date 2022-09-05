import Tippy from "@tippyjs/react";
import clsx from "clsx";
import React from "react";
import shallow from "zustand/shallow";
import { useNav } from "../../hooks";
import MemoIcBasemap from "../core/icons/IcBasemap";
import MemoIcExtent from "../core/icons/IcExtent";
import MemoIcMinimize from "../core/icons/IcMinimize";
import MemoIcRuler from "../core/icons/IcRuler";
import BasemapFeature from "./BasemapFeature";
import MeasurementFeature from "./toolbox/MeasurementFeature";

const MapToolbox = ({ isOpenBottomDrawer, setOpenMapToolbox, isOpen }) => {
  const [activeSideFeature, activeCardFeature, setActiveCardFeature] = useNav(
    (state) => [
      state.activeSideFeature,
      state.activeCardFeature,
      state.setActiveCardFeature,
    ],
    shallow
  );

  const handleOpenCardFeature = (item) => {
    if (
      activeCardFeature !== null &&
      activeCardFeature.featureId === item.featureId
    ) {
      setActiveCardFeature(null);
    } else {
      setActiveCardFeature(item);
    }
  };

  return (
    <div className='flex w-10 mt-2 flex-col rounded-[4px] bg-white p-2 transition-all duration-300 ease-in-out'>
      <div
        className={`${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } flex flex-col items-center justify-end gap-2 overflow-hidden transition-all duration-100 ease-in-out`}
      >
        <div className='flex flex-col gap-2'>
          <Tippy content='Extend' placement='right' delay={300}>
            <button
              onClick={() =>
                map.fitBounds(
                  [
                    bragaConfig
                      ? bragaConfig.sw_bound_point.coordinates
                      : [89.7191515625002, -19.661688141592478],
                    bragaConfig
                      ? bragaConfig.ne_bound_point.coordinates
                      : [144.1234484375007, 18.16833678790286],
                  ],
                  {
                    padding: {
                      bottom: isOpenBottomDrawer ? 400 : 0,
                      left: activeSideFeature ? 400 : 0,
                    },
                  }
                )
              }
              className='flex h-7 w-7 items-center justify-center rounded text-gray-600 hover:bg-gray-50 hover:text-brand-400'
            >
              <MemoIcExtent />
            </button>
          </Tippy>
          <Tippy content='Measurement' placement='right' delay={300}>
            <button
              onClick={() =>
                handleOpenCardFeature({
                  featureId: "ruler",
                  iconId: "map-ruler",
                  label: "Measurement",
                  content: <MeasurementFeature />,
                })
              }
              className='flex h-7 w-7 items-center justify-center rounded text-gray-600 hover:bg-gray-50 hover:text-brand-400'
            >
              <MemoIcRuler />
            </button>
          </Tippy>
          <Tippy content='Base map' placement='right' delay={300}>
            <button
              onClick={() =>
                handleOpenCardFeature({
                  featureId: "basemap",
                  iconId: "map-flat",
                  label: "Base map",
                  content: <BasemapFeature />,
                })
              }
              className='flex h-7 w-7 items-center justify-center rounded text-gray-600 hover:bg-gray-50 hover:text-brand-400'
            >
              <MemoIcBasemap />
            </button>
          </Tippy>
        </div>
      </div>
      <hr
        className={`${
          isOpen ? "max-w-96 my-2" : "my-0 max-w-0"
        } w-full transition-all duration-500 ease-in-out`}
      />
      <Tippy
        content={isOpen ? "Hide Toolkit" : "Show Toolkit"}
        placement='right'
        delay={300}
      >
        <button
          onClick={setOpenMapToolbox}
          className={clsx([
            "transition-all duration-200 group flex h-6 w-6 items-center justify-center rounded text-gray-600 hover:bg-gray-50 hover:text-brand-400",
            { "rotate-90": !isOpen, "-rotate-90": isOpen },
          ])}
        >
          <MemoIcMinimize />
        </button>
      </Tippy>
    </div>
  );
};

export default MapToolbox;
