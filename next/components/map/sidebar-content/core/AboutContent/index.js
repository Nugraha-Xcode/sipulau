import React from "react";
import style from "./AboutContent.module.css";

const AboutContent = ({ children, header, onClose }) => {
  return (
    <div className={style.container}>
      <div className={style.header_container}>
        <div className={style.header}>{header}</div>
        {/* <button onCLick={onClose}>
          <img src="/images/ic-close.svg" alt="close button" className="" />
        </button> */}
      </div>

      <div className={style.content}>{children}</div>
    </div>
  );
};

export default AboutContent;
