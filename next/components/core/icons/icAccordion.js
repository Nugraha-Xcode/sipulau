import React from "react";

const IcAccordionMemo = ({ variant = "up" }) => {
  const className = [];

  if (variant === "down") {
    className.push("rotate-180");
  }

  const classNameJoin = className.join(" ");

  if ((variant === "down") | (variant === "up"))
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNameJoin}
      >
        <path
          d="M11.293 9.03564L6.35349 4.09614C6.25843 4.0049 6.13176 3.95395 5.99999 3.95395C5.86822 3.95395 5.74156 4.0049 5.64649 4.09614L0.709991 9.03314L0.00299072 8.32614L4.93949 3.38914C5.22542 3.11663 5.60525 2.96462 6.00024 2.96462C6.39523 2.96462 6.77506 3.11663 7.06099 3.38914L12 8.32864L11.293 9.03564Z"
          fill="#4F4C4A"
        />
      </svg>
    );

  if (variant === "plus")
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 7.33333H8.66667V0H7.33333V7.33333H0V8.66667H7.33333V16H8.66667V8.66667H16V7.33333Z"
          fill="#4F4C4A"
        />
      </svg>
    );

  return null;
};

const IcAccordion = React.memo(IcAccordionMemo);

export default IcAccordion;
