import React, { useRef, useEffect, useCallback } from "react";

const SelectItem = ({
  index,
  focusIndex,
  value,
  label,
  onClick,
  currentValue,
  dark,
  //   highlight,
}) => {
  const buttonRef = useRef(null);
  const handleEnter = useCallback((event) => {
    if (event.key === "Enter" && buttonRef.current) buttonRef.current.click();
  }, []);
  useEffect(() => {
    if (index === focusIndex) {
      buttonRef.current.focus();
      document.addEventListener("keydown", handleEnter);
    } else {
      document.removeEventListener("keydown", handleEnter);
    }
  }, [focusIndex]);
  return (
    <button
      type='button'
      className={`w-full p-3 focus:outline-none justify-center ${
        dark
          ? "focus:bg-gray-500 hover:bg-gray-500"
          : "focus:bg-gray-200 hover:bg-gray-200"
      }  rounded-md ${currentValue == value ? "bg-gray-200" : ""} ${
        dark ? "bg-black-3" : "bg-white"
      }`}
      onClick={() => {
        onClick({ value: value, label: label });
      }}
      ref={buttonRef}
      tabIndex={-1}
    >
      <p className='leading-none text-xs'>{label}</p>
    </button>
  );
};
export default SelectItem;
