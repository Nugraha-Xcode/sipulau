import React from "react";

const AboutContent = ({ children, header, onClose }) => {
  return (
    <div className='flex flex-col gap-2 bg-gray-50 rounded-[15px] p-2'>
      <div className='flex justify-between  items-center'>
        <div className='font-semibold text-xs text-gray-500'>{header}</div>
        {/* <button onCLick={onClose}>
          <img src="/images/ic-close.svg" alt="close button" className="" />
        </button> */}
      </div>

      <div className='text-gray-500 text-xs'>{children}</div>
    </div>
  );
};

export default AboutContent;
