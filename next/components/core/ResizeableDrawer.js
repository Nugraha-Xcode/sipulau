import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDelayUnmount } from "../../utils/useDelayUnmount";

const ResizeableDrawer = ({ children, isOpen }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [currentHeight, setCurrentHeight] = useState(300);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    isOpen && setTimeout(() => setMount(true), 100);
    return () => {
      setMount(false);
    };
  }, [isOpen]);

  const shouldRender = useDelayUnmount(isOpen, 500);

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

  return shouldRender
    ? ReactDOM.createPortal(
        <div
          className={`drawer absolute bottom-0 z-50 bg-white w-full rounded-t-2xl transform ${
            mount ? "translate-y-0" : "translate-y-full"
          } ${
            isResizing
              ? ""
              : "transition-all duration-200 ease-in-out overscroll-contain overflow-hidden"
          }`}
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
        </div>,
        document.body
      )
    : null;
};

export default ResizeableDrawer;
