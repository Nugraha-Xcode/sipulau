import clsx from "clsx";
import React from "react";

const Button = ({ variant, children, onClick, isActive, className }) => {
  return (
    <button
      className={clsx([
        `w-full h-[fit-content] p-2 border-[1px] transition-all ${className}`,
        {
          "rounded-[8px] border-[#3675BC]  text-[#3675BC] hover:bg-[#BCDFFB] hover:font-semibold":
            variant === "outline",
          "bg-[#E2E1DF] text-white rounded-[8px] font-semibold":
            variant === "normal",
          "bg-[#BCDFFB] font-semibold": variant === "outline" && isActive,
          "bg-[#3675BC]": variant === "normal" && isActive,
          "cursor-disable": !isActive,
        },
      ])}
      onClick={onClick}
      disabled={!isActive}
    >
      {children}
    </button>
  );
};

export default Button;
