import React, { useCallback, useEffect, useState } from "react";
import { useDelayUnmount } from "../../utils/useDelayUnmount";

const BottomDrawer = ({ children, title, isShowing, toggle }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    isShowing && setTimeout(() => setMount(true), 100);
    return () => {
      setMount(false);
    };
  }, [isShowing]);
  const shouldRender = useDelayUnmount(isShowing, 500);

  return shouldRender ? (
    <div
      className={`w-full fixed bottom-0 z-50 rounded-t-2xl  bg-white ${
        mount ? "translate-y-0" : "translate-y-full"
      } transition-all duration-200 ease-in-out`}
    >
      <div className='py-4 px-3 flex justify-between'>
        <p className='text-xs font-semibold text-black-2 tracking-wider'>
          {title}
        </p>
        <button onClick={toggle}>
          <img src='/images/ic-close.svg' alt='close button' className='' />
        </button>
      </div>
      <hr className='border border-gray-4 opacity-40' />
      <div className='overflow-scroll max-h-[65vh] p-5'>{children}</div>
    </div>
  ) : null;
};

export default BottomDrawer;
