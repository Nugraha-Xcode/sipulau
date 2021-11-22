/* eslint-disable react/prop-types */
import React from "react";

const SortIcon = ({ opacityBottom, opacityTop }) => {
  return (
    <div className='w-5'>
      <svg
        width='8'
        height='12'
        viewBox='0 0 8 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity={opacityBottom}
          d='M7.73167 6.8H0.268334C0.0444792 6.8 -0.0805157 7.03549 0.0581151 7.19625L3.78978 11.5075C3.89659 11.6309 4.10227 11.6309 4.21022 11.5075L7.94188 7.19625C8.08052 7.03549 7.95552 6.8 7.73167 6.8Z'
          fill='#575F6C'
        />
        <path
          opacity={opacityTop}
          d='M7.73167 4.8H0.268334C0.0444792 4.8 -0.0805157 4.56452 0.0581151 4.40375L3.78978 0.092555C3.89659 -0.030848 4.10227 -0.030848 4.21022 0.092555L7.94188 4.40375C8.08052 4.56452 7.95552 4.8 7.73167 4.8Z'
          fill='#575F6C'
        />
      </svg>
    </div>
  );
};

export default SortIcon;
