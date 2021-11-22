import React, { useRef, useEffect, useCallback } from "react";

const SelectItem = ({ index, focusIndex, value, label, onClick }) => {
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
      className='w-full p-3 focus:outline-none justify-center md:focus:bg-gray-200 md:hover:bg-gray-200 rounded-md'
      onClick={() => {
        onClick({ value: value, label: label });
      }}
      ref={buttonRef}
      tabIndex={-1}
    >
      <p className={`font-paragraph text-black-2 leading-none text-sm `}>
        {label}
      </p>
    </button>
  );
};
export default SelectItem;
