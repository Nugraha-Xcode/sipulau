import React from "react";

const Loader = ({ show = false }) => {
  return (
    show && (
      <img
        src='/images/loader.svg'
        alt='loader'
        className='absolute w-10 h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      />
    )
  );
};

export default Loader;
