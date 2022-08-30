import React from "react";
import style from "./LayerManagementItem.module.css";
import IcAccordion from "../../../../core/icons/icAccordion";
import IcEye from "../../../../core/icons/IcEye";

const OpacityController = () => {
  return (
    <div className={style.opacity_container}>
      <div className={style.header_opacity}>
        <p>Network Data</p>
        <div className={style.button_control_container}>
          <button>
            <IcEye />
          </button>

          <button>
            <img src="/images/icDots.svg" alt="three dots" />
          </button>
        </div>
      </div>

      <div className={style.content_opacity}>
        <div className={style.icon_container_opacity}>
          <img src="/images/ic-zoom.svg" alt="" />
          <p>Zoom to Layer</p>
        </div>
        <div className={style.icon_container_opacity}>
          <IcAccordion variant="up" />
          <p>Move Layer Up</p>
        </div>
        <div className={style.icon_container_opacity}>
          <IcAccordion variant="down" />
          <p>Move Layer Down</p>
        </div>
        <div className={style.icon_container_opacity}>
          <img src="/images/ic-trash.svg" alt="" />
          <p>Zoom to Layer</p>
        </div>
      </div>

      <div className={style.slider_opacity}>
        <img src="/images/ic-transparency.svg" alt="" />
        <input type="range" id="vol" name="vol" min="0" max="100" />
        <p>80%</p>
      </div>
    </div>
  );
};

export default OpacityController;
