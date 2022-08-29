import React from "react";
import style from "./LayerListDownload.module.css";

const LayerListDownload = () => {
  return (
    <div className={style.container}>
      <p>Layer List:</p>

      <div className={style.content}>
        <input type="radio" />
        Layer Name 1
      </div>
      <div className={style.content}>
        <input type="radio" />
        Layer Name 2
      </div>
    </div>
  );
};

export default LayerListDownload;
