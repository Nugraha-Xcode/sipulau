import React from "react";
import clsx from "clsx";
import { Transition } from "@headlessui/react";

const CustomTransition = ({ show, children, variant, as, className }) => {
  return (
    <Transition
      as={as}
      show={show}
      enter="transition transform  duration-15"
      className={className}
      enterFrom={clsx([
        "opacity-0",
        {
          " -translate-y-3": variant === "fade-down",
          "translate-y-3": variant === "fade-up",
          "-translate-x-3": variant === "fade-left",
          "translate-x-3": variant === "fade-right",
        },
      ])}
      enterTo={clsx([
        "opacity-100",
        {
          " translate-y-0": variant === "fade-down",
          "translate-y-0": variant === "fade-up",
          "translate-x-0": variant === "fade-left",
          "translate-x-0": variant === "fade-right",
        },
      ])}
      leave="transition transform duration-150"
      leaveFrom={clsx([
        "opacity-100",
        {
          " translate-y-0": variant === "fade-down",
          "translate-y-0": variant === "fade-up",
          "translate-x-0": variant === "fade-left",
          "translate-x-0": variant === "fade-right",
        },
      ])}
      leaveTo={clsx([
        "opacity-0",
        {
          " -translate-y-3": variant === "fade-down",
          "translate-y-3": variant === "fade-up",
          "-translate-x-3": variant === "fade-left",
          "translate-x-3": variant === "fade-right",
        },
      ])}
    >
      {children}
    </Transition>
  );
};

export default CustomTransition;
