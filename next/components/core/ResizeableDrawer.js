import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";

const ResizeableDrawer = ({
  children,
  isOpen,
  isOpenNav,
  isExpandNav,
  isActiveSideFeature,
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [currentHeight, setCurrentHeight] = useState(300);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    isOpen && setTimeout(() => setMount(true), 100);
    return () => {
      setMount(false);
    };
  }, [isOpen]);

  const handleMousedown = useCallback((e) => {
    setIsResizing(true);
  }, []);

  const handleMousemove = useCallback((e) => {
    let offsetBottom = window.innerHeight - e.clientY;
    let minHeight = 75;
    let maxHeight = window.innerHeight - 100;
    if (offsetBottom > minHeight && offsetBottom < maxHeight) {
      setCurrentHeight(offsetBottom);
    }
  }, []);

  const handleMouseup = useCallback((e) => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMousemove, true);
      document.addEventListener("mouseup", handleMouseup, true);
    } else {
      document.removeEventListener("mousemove", handleMousemove, true);
      document.removeEventListener("mouseup", handleMouseup, true);
    }
  }, [isResizing, handleMousedown, handleMousemove, handleMouseup]);

  return (
    <div
      data-cy='resizeable-bottom-drawer'
      className={clsx([
        "drawer absolute bottom-0 right-0 z-20 bg-white w-screen rounded-t-2xl transform",
        {
          "translate-y-0": mount,
          "translate-y-full": !mount,
          "": isResizing,
          "transition-all duration-200 ease-in-out overscroll-contain overflow-hidden":
            !isResizing,
          "w-[calc(100%-64px)]":
            isOpenNav && !isExpandNav && !isActiveSideFeature,
          "w-[calc(100%-228px)]":
            isOpenNav && isExpandNav && !isActiveSideFeature,
          "w-[calc(100%-352px)]":
            isOpenNav && !isExpandNav && isActiveSideFeature,
        },
      ])}
    >
      <div
        onMouseDown={handleMousedown}
        className='w-full cursor-resize flex justify-center items-center'
      >
        <div className='w-44 h-1 bg-gray-4 rounded-md my-2'></div>
      </div>
      {children}
      <style jsx>
        {`
          .drawer {
            height: ${currentHeight + "px"};
          }
        `}
      </style>
    </div>
  );
};

export default ResizeableDrawer;
