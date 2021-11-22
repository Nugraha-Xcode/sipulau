import React, { useState } from "react";

const LegendItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>RBI 5K TEROWONGAN</p>
        <img
          src='/images/ic-arrow-r.svg'
          alt='arrow icon'
          className={`transform ${
            isOpen ? "rotate-90" : "rotate-0"
          } transition-transform duration-300 ease-in-out`}
        />
      </div>
      <div
        className={`${
          isOpen ? "max-h-32" : "max-h-0"
        } overflow-hidden transition-all duration-500`}
      >
        <p>legend 1</p>
        <p>legend 2</p>
      </div>
    </div>
  );
};

export default LegendItem;
