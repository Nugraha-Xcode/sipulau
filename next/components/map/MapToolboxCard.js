import React from "react";
import { Transition } from "@headlessui/react";
import clsx from "clsx";

import { useNav } from "../../hooks";

const MapToolboxCard = ({ isOpen, onClose }) => {
  const activeCardFeature = useNav((state) => state.activeCardFeature);
  return (
    <Transition
      appear={true}
      show={isOpen}
      enter='transition-all duration-300 ease-in-out transform'
      enterFrom='opacity-0 -translate-x-3'
      enterTo='opacity-100 translate-x-0'
      leave='transition-all duration-300 ease-in-out transform'
      leaveFrom='opacity-50 translate-x-0'
      leaveTo='opacity-0 -translate-x-3'
    >
      <div
        className={clsx([
          "absolute bottom-0 z-50 ml-3 flex w-[13.5rem] flex-col gap-2 rounded-lg bg-white p-3",
        ])}
      >
        <div className='flex items-center justify-between'>
          <p>Base map</p>
          <button onClick={onClose}>
            <img src='/images/ic-close.svg' alt='close button' />
          </button>
        </div>
        <hr />
        <div className='hide-scrollbar max-h-96 overflow-y-scroll'>
          {activeCardFeature && activeCardFeature.content}
        </div>
      </div>
    </Transition>
  );
};

export default MapToolboxCard;
