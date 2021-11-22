import { useState } from "react";

const CustomSubLayerItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-col'>
      <div className='flex gap-3'>
        <p className='flex-1 truncate'>
          Layer Indeks Rupabumi Indonesia dfdfdsfd fdsfdsf
        </p>
        <div className='flex gap-2'>
          <button>
            <img src='/images/ic-eye.svg' alt='see icon' className='w-4' />
          </button>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <img src='/images/ic-dots.svg' alt='dots icon' className='w-4' />
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden transition-all duration-500 rounded-md `}
      >
        <div className='bg-blue-2 p-2 flex flex-col gap-3'>
          <div className='flex gap-2 items-center'>
            <img src='/images/ic-arrow-extent.svg' />
            <p>Go to full extent</p>
          </div>
          <div className='flex gap-2 items-center'>
            <img src='/images/ic-arrow-t.svg' />
            <p>Move Layer UP</p>
          </div>
          <div className='flex gap-2 items-center'>
            <img src='/images/ic-arrow-b.svg' />
            <p>Move Layer Down</p>
          </div>
          <div className='flex gap-2 items-center'>
            <img src='/images/ic-trash.svg' />
            <p>Delete layer</p>
          </div>
          <div className='flex gap-2 items-center'>
            <img src='/images/ic-brightness.svg' />
            <input type='range' className='flex-1' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSubLayerItem;
