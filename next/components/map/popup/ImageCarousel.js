import React from "react";
import { useKeenSlider } from "keen-slider/react";

const ImageCarousel = ({ imageList }) => {
  const [sliderRef] = useKeenSlider({
    spacing: 5,
    loop: true,
  });

  return (
    <div ref={sliderRef} className='keen-slider w-full h-32'>
      {imageList.map((el, index) => {
        if (el) {
          return (
            <div className='keen-slider__slide rounded-lg' key={index}>
              <img
                src={el}
                alt='foto komentar'
                className='h-full w-full object-contain items-center'
              />
            </div>
          );
        } else {
          null;
        }
      })}
    </div>
  );
};

export default ImageCarousel;
