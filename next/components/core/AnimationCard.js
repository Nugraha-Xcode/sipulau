import React, { useEffect, useState } from "react";
import { useDelayUnmount } from "../../utils/useDelayUnmount";

const AnimationCard = ({ children, isShowing, addStyle, position }) => {
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
      className={`absolute ${
        position === "right" ? "-right-2" : "left-14 md:-left-2"
      } transform ${
        mount
          ? position === "right"
            ? "translate-x-full opacity-1"
            : "-translate-x-full opacity-1"
          : position === "right"
          ? "translate-x-0 opacity-0"
          : "-translate-x-0 opacity-0"
      } bg-white rounded-lg w-[18.5rem] z-10 transition-all duration-500 ease-in-out ${addStyle}`}
    >
      {children}
    </div>
  ) : null;
};

export default AnimationCard;
