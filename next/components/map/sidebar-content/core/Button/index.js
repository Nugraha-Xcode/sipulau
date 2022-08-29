import React from "react";
import style from "./Button.module.css";

const Button = ({ variant, children, onClick, isActive, isLayer }) => {
  const className = [style.base];

  switch (variant) {
    case "outline":
      className.push(style.outline);
      if (isActive) className.push(style.outline_active);
      if (isActive && isLayer) className.push(style.outline_active_layer);
      break;

    case "normal":
      className.push(style.normal);
      if (isActive) className.push(style.normal_active);
      break;
  }

  return (
    <button className={className.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
