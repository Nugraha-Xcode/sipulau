import { Transition } from "@headlessui/react";
import React from "react";
import IcAccordion from "../../../../core/icons/icAccordion";

import IcEye from "../../../../core/icons/IcEye";
import CustomTransition from "../../core/CustomTransition";
import style from "./LayerManagementItem.module.css";
import OpacityController from "./OpacityController";

const LayerManagementItem = ({ name, subName, icEyeVariant, isActive }) => {
  const [isShowOpacity, setIsShowOpacity] = React.useState(false);

  return (
    <div className={style.wrapper}>
      <div
        className={style.container}
        onClick={() => setIsShowOpacity((prevState) => !prevState)}
      >
        <div className={style.line} />

        <div className={style.text_container}>
          <div className={style.name}>{name}</div>
          <div className={style.sub_name}>{subName}</div>
        </div>

        <div className={style.icon_container}>
          {/* add onClick props if needed  */}
          <button>
            <IcEye variant={icEyeVariant} isActive={isActive} />
          </button>

          {/* add onClick props if needed  */}
          <button>
            <IcAccordion />
          </button>

          {/* add onClick props if needed  */}
          <button>
            <IcAccordion variant="down" />
          </button>
        </div>
      </div>
      {/* open OpacityController component for manage the logic and API implementation */}
      <CustomTransition show={isShowOpacity} variant="fade-down">
        <OpacityController />
      </CustomTransition>
    </div>
  );
};

export default LayerManagementItem;
