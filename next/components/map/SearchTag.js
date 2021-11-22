import React from "react";
const SearchTag = ({ label, value, onClick, isActive, isLoad }) => {
  return (
    <button
      className={`${
        isActive
          ? "bg-blue-2 bg-opacity-20 border-blue-3 text-main-blue"
          : "bg-white border-gray-4 text-main-gray"
      }  border-2 rounded-full h-8 max-w-max px-4 focus:outline-none text-xs`}
      onClick={onClick}
      disabled={isLoad}
    >
      <p className='whitespace-nowrap'>{label}</p>
    </button>
  );
};
export default SearchTag;
