import React from "react";
import IcAccordion from "../../../../core/icons/icAccordion";
import CustomTransition from "../CustomTransition";
import clsx from "clsx";

const Accordion = ({ children, id, label, activeId, isOpen, setValue }) => {
  return (
    <div
      className={clsx([
        "relative h-[fit-content] w-full border-[1px] px-2 py-[15px] gap-3 rounded-lg flex flex-col transition",
        {
          "bg-[#E7F5FE] hover:bg-[#E7F5FE]": isOpen,
          "hover:bg-gray-100": !isOpen,
        },
      ])}
    >
      <div
        className='w-full h-[fit-content] cursor-pointer'
        onClick={() => {
          if (activeId === id) {
            setValue("");
          } else {
            setValue(id);
          }
        }}
      >
        <div className='flex w-full h-full items-center justify-between font-semibold text-gray-600'>
          <p>{label}</p>
          <button className='transition-all'>
            <IcAccordion variant={isOpen ? "up" : "plus"} />
          </button>
        </div>
      </div>
      <CustomTransition show={isOpen} variant='fade-down'>
        <div className='w-full h-auto'>{children}</div>
      </CustomTransition>
    </div>
  );
};

export default Accordion;
