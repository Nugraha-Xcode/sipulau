import React, { Fragment } from "react";
import IcAccordion from "../../../../core/icons/icAccordion";
import style from "./dropdown.module.css";
import { Transition } from "@headlessui/react";
import CustomTransition from "../CustomTransition";

const Dropdown = ({
  value,
  direction,
  label = "",
  styleOptions,
  onValueSelected,
  valueSelected,
}) => {
  const [labelValue, setLabelValue] = React.useState(label);

  const [isActive, setIsActive] = React.useState(false);

  // handle the option clicked
  const handleOption = (item) => {
    onValueSelected(item);

    setIsActive(false);
    setLabelValue("");
  };

  // handle style dropdown

  const buttonStyle = [style.button_select];

  switch (direction) {
    case "up":
      if (isActive) buttonStyle.push(style.button_up_active);
      break;

    case "down":
      if (isActive) buttonStyle.push(style.button_down_active);
      break;
  }

  return (
    <div className={style.container}>
      <CustomTransition
        show={direction === "up" && isActive}
        variant='fade-up'
        as={Fragment}
      >
        <div
          className={style.options}
          style={{
            borderRadius: "8px 8px 0px 0px",
            ...styleOptions,
          }}
        >
          {value.map((item, index) => {
            return (
              <div
                key={index}
                className={style.option}
                onClick={() => handleOption(item)}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </CustomTransition>

      <button
        className={buttonStyle.join(" ")}
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        {labelValue ? labelValue : valueSelected?.label}

        {direction === "up" ? (
          <IcAccordion variant={isActive ? "down" : "up"} />
        ) : (
          <IcAccordion variant={isActive ? "up" : "down"} />
        )}
      </button>

      <CustomTransition
        show={direction === "down" && isActive}
        variant='fade-down'
        as={Fragment}
      >
        <div
          className={style.options}
          style={{
            borderRadius: "0px 0px 8px 8px",
            ...styleOptions,
          }}
        >
          {value.map((item, index) => {
            return (
              <div
                className={style.option}
                onClick={() => handleOption(item)}
                key={index}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </CustomTransition>
    </div>
  );
};

export default Dropdown;
