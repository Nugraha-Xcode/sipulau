import React from "react";

const Skeleton = ({ style, shape }) => {
  return (
    <div
      className={`animate-pulse bg-main-gray ${
        shape === "circle" ? "rounded-full" : "rounded-md"
      } bg-opacity-20 ${style}`}
    ></div>
  );
};

export default Skeleton;
