import React from "react";
import Tippy from "@tippyjs/react";
import clsx from "clsx";

const NavItem = ({
  expand,
  disabled = false,
  label,
  onClick,
  icon,
  isActive,
}) => {
  return (
    <Tippy
      content={label}
      disabled={expand ? true : false}
      placement='right'
      delay={300}
    >
      <button
        disabled={disabled}
        className={clsx([
          "group hover:text-main-blue  flex h-10 w-full items-center rounded-xl hover:cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-50",
          {
            "mr-6": expand,
            "text-gray-400": disabled,
            // conditioning isActive state
            "bg-blue-50 text-main-blue": isActive,
            "text-gray-500": !isActive,
          },
        ])}
        onClick={onClick}
      >
        <div
          className={clsx([
            "flex w-[2.75rem] items-center justify-center",
            // { "rotate-180 transform": !expand },
          ])}
        >
          {icon}
        </div>
        <p
          className={clsx([
            "ml-1 select-none text-sm",
            {
              "hidden opacity-0": !expand,
            },
          ])}
        >
          {label}
        </p>
      </button>
    </Tippy>
  );
};

export default NavItem;
