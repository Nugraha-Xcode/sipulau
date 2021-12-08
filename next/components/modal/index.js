import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDelayUnmount } from "../../utils/useDelayUnmount";

const Modal = ({ children, isShowing, handleModal, size }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    isShowing && setTimeout(() => setMount(true), 100);
    return () => {
      setMount(false);
    };
  }, [isShowing]);

  const shouldRender = useDelayUnmount(isShowing, 500);

  let maxSize = "max-w-sm";
  switch (size) {
    case "md":
      maxSize = "max-w-lg";
      break;
    case "lg":
      maxSize = "max-w-xl";
      break;
    case "xl":
      maxSize = "max-w-3xl";
      break;

    default:
      break;
  }

  return shouldRender
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className='fixed top-0 left-0 z-[1010] w-screen h-screen overflow-x-hidden overflow-y-hidden overscroll-none p-5'>
            <div
              className={`fixed top-0 left-0  w-screen h-screen bg-black transition ease-in-out duration-300 ${
                mount ? "bg-opacity-60" : "bg-opacity-0"
              }`}
              onClick={handleModal}
            />
            <div
              className={`hide-scrollbar ${
                mount
                  ? "-translate-y-1/2 opacity-100"
                  : "translate-y-full opacity-0"
              } bg-white relative rounded-md ${maxSize} max-h-[80vh] overflow-y-scroll overflow-x-hidden top-1/2 left-1/2 transform -translate-x-1/2  overscroll-none transition-all ease-in-out duration-200 flex flex-col gap-5`}
            >
              {children}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
