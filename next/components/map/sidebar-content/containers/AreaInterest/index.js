import React from "react";
import style from "./AreaOfInterest.module.css";

const AreaInterest = () => {
  return (
    <div className={style.container}>
      <p>Area of Interest List:</p>
      <div className={style.content}>
        No Area of Interest to Show. Please draw Area of Interest First
      </div>
    </div>
  );
};

export default AreaInterest;
