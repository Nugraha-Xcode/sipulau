import React from "react";
import style from "./Button.module.css";

const Button = ({
  variant,
  children,
  onClick,
  isActive,
  isLayer,
  className,
  disabled = false,
}) => {
  const customClassName = [style.base];

  switch (variant) {
    case "outline":
      customClassName.push(style.outline);
      if (isActive) customClassName.push(style.outline_active);
      if (isActive && isLayer) customClassName.push(style.outline_active_layer);
      break;

    case "normal":
      customClassName.push(style.normal);
      if (isActive) customClassName.push(style.normal_active);
      break;
  }

  return (
    <button
      className={`${customClassName.join(" ")} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
