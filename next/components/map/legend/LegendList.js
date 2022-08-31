import React from "react";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { useNetwork } from "../../../hooks";
import LegendItem from "./LegendItem";

const LegendList = ({ isOpen }) => {
  const activeLegend = useNetwork((state) => state.activeLegend);

  return (
    <Transition
      appear={true}
      show={isOpen}
      enter='transition-all duration-300 ease-in-out transform'
      enterFrom='opacity-0 -translate-y-3'
      enterTo='opacity-100 translate-y-0'
      leave='transition-all duration-300 ease-in-out transform'
      leaveFrom='opacity-50 translate-y-0'
      leaveTo='opacity-0 -translate-y-3'
    >
      <div
        className={clsx([
          "hide-scrollbar absolute right-0 flex max-h-80 w-56 flex-col gap-2 divide-y divide-gray-300 overflow-y-scroll rounded-[4px] bg-white p-3",
        ])}
      >
        {activeLegend.map((el, index) => (
          <LegendItem
            label={el.label}
            judul={el.judul}
            key={index + el.label}
            legendImageUrl={el.legendImageUrl || null}
            legendList={el.legendList || null}
          />
        ))}
        {/* {activeSpatialData.length > 0 ? (
          <div>test</div>
        ) : (
          <div className='flex items-center justify-center'>
            <p className='text-gray-600 dark:text-gray-100'>No Data Shown</p>
          </div>
        )} */}
      </div>
    </Transition>
  );
};

export default LegendList;
