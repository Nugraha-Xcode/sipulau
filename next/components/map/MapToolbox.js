import { Transition } from "@headlessui/react";
import Tippy from "@tippyjs/react";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import React, { useContext } from "react";
import shallow from "zustand/shallow";
import MapContext from "../../context/MapContext";
import { useNav } from "../../hooks";
import MemoIcBasemap from "../core/icons/IcBasemap";
import MemoIcCrs from "../core/icons/IcCrs";
import MemoIcExtent from "../core/icons/IcExtent";
import MemoIcMinimize from "../core/icons/IcMinimize";
import MemoIcRuler from "../core/icons/IcRuler";
import BasemapFeature from "./BasemapFeature";
import CrsSelectorFeature from "./toolbox/CrsSelectorFeature";
import MeasurementFeature from "./toolbox/MeasurementFeature";

const MapToolbox = ({ isOpenBottomDrawer, setOpenMapToolbox, isOpen }) => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["map"] };
    return t(key, params);
  };
  const { map } = useContext(MapContext);
  const [
    activeSideFeature,
    activeCardFeature,
    setActiveCardFeature,
    expandSideNav,
  ] = useNav(
    (state) => [
      state.activeSideFeature,
      state.activeCardFeature,
      state.setActiveCardFeature,
      state.expandSideNav,
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
    <div className='relative'>
      <div className='flex w-10 mt-2 flex-col rounded-[4px] bg-white p-2 transition-all duration-300 ease-in-out'>
        <div
          className={`${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } flex flex-col items-center justify-end gap-2 overflow-hidden transition-all duration-100 ease-in-out`}
        >
          <div className='flex flex-col gap-2'>
            <Tippy
              content={translatedText("tools.resetExtend")}
              placement='right'
              delay={300}
            >
              <button
                onClick={() =>
                  map.fitBounds(
                    [
                      [89.7191515625002, -19.661688141592478],
                      [144.1234484375007, 18.16833678790286],
                    ],
                    {
                      padding: {
                        bottom: isOpenBottomDrawer ? 400 : 0,
                        left: activeSideFeature ? 350 : expandSideNav ? 200 : 0,
                      },
                    }
                  )
                }
                className='flex h-7 w-7 items-center justify-center rounded text-gray-600 hover:bg-gray-50 hover:text-brand-400'
              >
                <MemoIcExtent />
              </button>
            </Tippy>
            <Tippy
              content={translatedText("tools.measurement")}
              placement='right'
              delay={300}
            >
              <button
                onClick={() =>
                  handleOpenCardFeature({
                    featureId: "ruler",
                    iconId: "map-ruler",
                    label: translatedText("tools.measurement"),
                    content: <MeasurementFeature />,
                  })
                }
                className='flex h-7 w-7 items-center justify-center rounded text-gray-600 hover:bg-gray-50 hover:text-brand-400'
              >
                <MemoIcRuler />
              </button>
            </Tippy>
            <Tippy
              content={translatedText("tools.setCrs")}
              placement='right'
              delay={300}
            >
              <button
                onClick={() =>
                  handleOpenCardFeature({
                    featureId: "crs",
                    iconId: "map-crs",
                    label: translatedText("tools.setCrs"),
                    content: <CrsSelectorFeature />,
                  })
                }
                className='flex h-7 w-7 items-center justify-center rounded text-gray-600 hover:bg-gray-50 hover:text-brand-400'
              >
                <MemoIcCrs />
              </button>
            </Tippy>
            <Tippy
              content={translatedText("tools.baseMap")}
              placement='right'
              delay={300}
            >
              <button
                onClick={() =>
                  handleOpenCardFeature({
                    featureId: "basemap",
                    iconId: "map-flat",
                    label: translatedText("tools.baseMap"),
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
          content={
            isOpen
              ? translatedText("hideToolkit")
              : translatedText("showToolkit")
          }
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
      <Transition
        appear={true}
        show={Boolean(activeCardFeature)}
        enter='transition-all duration-300 ease-in-out transform'
        enterFrom='opacity-0 translate-x-3'
        enterTo='opacity-100 translate-x-0'
        leave='transition-all duration-300 ease-in-out transform'
        leaveFrom='opacity-50 translate-x-0'
        leaveTo='opacity-0 translate-x-3'
      >
        <div
          className={clsx([
            "absolute bottom-0 right-12 z-50 flex w-[13.5rem] flex-col gap-2 rounded-lg bg-white p-3",
          ])}
        >
          <div className='flex items-center justify-between'>
            <p className='text-[10px] text-gray-600'>
              {activeCardFeature && activeCardFeature.label}
            </p>
            <button onClick={() => setActiveCardFeature(null)}>
              <img
                src='/images/ic-close.svg'
                alt='close button'
                className='w-2 h-2'
              />
            </button>
          </div>
          <hr />
          <div className='hide-scrollbar max-h-96 overflow-y-scroll'>
            {activeCardFeature && activeCardFeature.content}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default MapToolbox;
