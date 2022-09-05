import React from "react";

export const SearchSuggestion = ({ children, onClick }) => {
  return (
    <div className='flex justify-between items-center p-3' onClick={onClick}>
      <div>{children}</div>
      <img
        src='/images/marker-suggestion.svg'
        alt='search Button'
        className='w-5 h-5'
      />
    </div>
  );
};
