import React from "react";

const PageItem = ({ number, getClick, active }) => {
  return (
    <button
      className={`cursor-pointer h-8 w-8 rounded-md ${
        active === number
          ? "border border-main-blue"
          : "border border-[#DFE3E8] hover:bg-gray-200"
      } flex items-center justify-center mx-1 focus:outline-none`}
      onClick={() => {
        getClick(number);
      }}
    >
      <p
        className={`${
          active === number
            ? "text-main-blue font-bold"
            : "text-dark-blue text-opacity-60"
        } text-sm`}
      >
        {number}
      </p>
    </button>
  );
};

export default PageItem;
