import React, { Fragment } from "react";
import style from "./SearchResult.module.css";
import { Transition } from "@headlessui/react";
import CustomTransition from "../../core/CustomTransition";

const Slider = ({ data }) => {
  //   initialize images by index
  const [show, setShow] = React.useState(0);

  //   changes image slider
  const handleSlider = (index) => {
    setShow(index);
  };

  return (
    <div className={style.slider_container}>
      {data?.map((item, index) => {
        return (
          <CustomTransition
            show={show === index}
            key={index}
            variant="fade-right"
            className={style.img_container}
          >
            <img
              key={index}
              src={item.image}
              alt="images slider"
              className={style.slider_image}
            />
          </CustomTransition>
        );
      })}

      {/* slider control  */}
      <div className={style.slider_control_container}>
        {data?.map((item, index) => {
          return (
            <div
              key={item}
              className={index === show ? style.circle_active : style.circle}
              onClick={() => handleSlider(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
