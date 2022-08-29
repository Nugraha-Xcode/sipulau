import React from "react";
import style from "./Accordion.module.css";
import IcAccordion from "../../../../core/icons/icAccordion";
import { Transition } from "@headlessui/react";
import CustomTransition from "../CustomTransition";

const Accordion = ({ children, name }) => {
  const [isActive, setIsActive] = React.useState(false);

  const wrapperStyle = [style.wrapper];

  if (isActive === true) wrapperStyle.push(style.wrapper_active);

  return (
    <div className={wrapperStyle.join(" ")}>
      <div
        className={style.container}
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        <div className={style.name_container}>
          <p>{name}</p>
          <button className={style.button}>
            <IcAccordion variant={isActive ? "up" : "plus"} />
          </button>
        </div>
      </div>
      <CustomTransition show={isActive} variant='fade-down'>
        <div className={style.content}>{children}</div>
      </CustomTransition>
    </div>
  );
};

export default Accordion;
