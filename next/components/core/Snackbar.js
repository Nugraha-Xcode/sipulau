import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDelayUnmount } from "../../utils/useDelayUnmount";

const Snackbar = ({ isShowing, toggle, text, type }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    isShowing && setTimeout(() => setMount(true), 100);
    isShowing && setTimeout(() => toggle(), 2000);
    return () => {
      setMount(false);
    };
  }, [isShowing]);
  const shouldRender = useDelayUnmount(isShowing, 500);
  return shouldRender
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className={`transition-all ease-in-out duration-200 ${
              mount
                ? "-translate-y-1/2 opacity-100"
                : "translate-y-full opacity-0"
            } fixed bottom-5 left-1/2 ${
              type === "error" ? "bg-[#EB5757]" : "bg-[#6FCF97]"
            } w-[fit-content] text-white py-3 px-6 transform -translate-x-1/2 rounded-lg shadow-xl z-[999999]`}
          >
            {text}
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Snackbar;
