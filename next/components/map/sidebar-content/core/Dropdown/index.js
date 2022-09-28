import React, { Fragment } from "react";
import IcAccordion from "../../../../core/icons/icAccordion";
import CustomTransition from "../CustomTransition";
import clsx from "clsx";

const Dropdown = ({
  value,
  direction,
  label = "",
  styleOptions,
  onValueSelected,
  valueSelected,
}) => {
  const [labelValue, setLabelValue] = React.useState(label);

  const [isActive, setIsActive] = React.useState(false);

  // handle the option clicked
  const handleOption = (item) => {
    onValueSelected(item);

    setIsActive(false);
    setLabelValue("");
  };

  return (
    <div className='flex flex-col w-full'>
      <CustomTransition
        show={direction === "up" && isActive}
        variant='fade-up'
        as={Fragment}
      >
        <div
          className='border-[#777574] w-full border-[1px] overflow-auto mb-[-8px] bg-white flex flex-col z-30'
          style={{
            borderRadius: "8px 8px 0px 0px",
            ...styleOptions,
          }}
        >
          {value.map((item, index) => {
            return (
              <div
                key={index}
                className='cursor-pointer text-sm hover:bg-[#F2F2F2] py-3 px-4 transition-all'
                onClick={() => handleOption(item)}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </CustomTransition>

      <button
        className={clsx([
          "flex w-full h-[40px] rounded-[8px] text-gray-600 border-[1px] border-gray-600 items-center px-4 py-2 justify-between bg-white text-left text-xs",
          {
            "rounded-b-none": isActive && direction === "down",
            "rounded-t-none": isActive && direction === "up",
          },
        ])}
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        {labelValue ? labelValue : valueSelected?.label}

        {direction === "up" ? (
          <IcAccordion variant={isActive ? "down" : "up"} />
        ) : (
          <IcAccordion variant={isActive ? "up" : "down"} />
        )}
      </button>

      <CustomTransition
        show={direction === "down" && isActive}
        variant='fade-down'
        as={Fragment}
      >
        <div
          className='border-[#777574] w-full border-[1px] overflow-auto mb-[-8px] bg-white flex flex-col z-30'
          style={{
            borderRadius: "0px 0px 8px 8px",
            ...styleOptions,
          }}
        >
          {value.map((item, index) => {
            return (
              <div
                className='cursor-pointer text-sm hover:bg-[#F2F2F2] py-3 px-4 transition-all text-gray-600'
                onClick={() => handleOption(item)}
                key={index}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </CustomTransition>
    </div>
  );
};

export default Dropdown;
