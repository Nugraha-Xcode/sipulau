import Image from "next/image";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect, useRef } from "react";

const ArrowLeft = (props) => {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <div className='hidden md:block w-5 h-5 absolute z-50 top-1/2 left-10 transform -translate-y-1/2 text-[#3C5373] cursor-pointer'>
      <svg
        onClick={props.onClick}
        className={"fill-current arrow arrow--left" + disabeld}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      </svg>
    </div>
  );
};

const ArrowRight = (props) => {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <div className='hidden md:block w-5 h-5 absolute z-50 top-1/2 right-10 transform -translate-y-1/2 text-[#3C5373] cursor-pointer'>
      <svg
        onClick={props.onClick}
        className={"fill-current arrow arrow--right" + disabeld}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      </svg>
    </div>
  );
};

const Section1 = ({ items }) => {
  const timer = useRef();
  const [pause, setPause] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 2000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 4000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <div className='relative'>
      {slider && (
        <ArrowLeft
          onClick={(e) => e.stopPropagation() || slider.prev()}
          disabled={currentSlide === 0}
        />
      )}
      <div ref={sliderRef} className='keen-slider'>
        {items.map((el, index) => (
          <div className='keen-slider__slide' key={index}>
            <div className='min-h-[80vh] md:min-h-screen relative flex items-center justify-center filter'>
              <Image
                src={el.imgSrc}
                alt={"carousel" + index}
                layout='fill'
                objectFit='cover'
                className=''
                priority={true}
              />
              {/* <div className='absolute w-full min-h-screen bg-red-500'></div> */}
              <div className='flex flex-col items-center text-white text-center space-y-6 z-10 p-4 w-full md:w-3/4'>
                <p className='text-lg md:text-xl lg:text-2xl text-main-blue'>
                  {el.subTitle && el.subTitle}
                </p>
                <h1 className='text-dark-blue'>{el.title && el.title}</h1>
                <p className='text-dark-blue text-opacity-80 text-sm md:text-[1.225rem] lg:text-[1.375rem] leading-5 lg:leading-8'>
                  {el.text && el.text}
                </p>
                {el.buttonLabel && (
                  <Link href={el.buttonHref}>
                    <button
                      onClick={() => {}}
                      className={`flex lg:text-lg space-x-2 bg-main-blue
                   rounded-full text-white
                    text-sm py-3 lg:py-5 px-5 lg:px-8 hover:opacity-80`}
                    >
                      <p>{el.buttonLabel}</p>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {slider && (
        <ArrowRight
          onClick={(e) => e.stopPropagation() || slider.next()}
          disabled={currentSlide === slider.details().size - 1}
        />
      )}
      {slider && (
        <div className='dots absolute bottom-10 left-1/2 transform -translate-x-1/2'>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </div>
      )}
      <style jsx>
        {`
          body {
            margin: 0;
            font-family: "Inter", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          [class^="number-slide"],
          [class*=" number-slide"] {
            background: grey;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 50px;
            color: #fff;
            font-weight: 500;
            height: 100vh;
          }

          .number-slide1 {
            background: rgb(64, 175, 255);
            background: linear-gradient(
              128deg,
              rgba(64, 175, 255, 1) 0%,
              rgba(63, 97, 255, 1) 100%
            );
          }

          .number-slide2 {
            background: rgb(255, 75, 64);
            background: linear-gradient(
              128deg,
              rgba(255, 154, 63, 1) 0%,
              rgba(255, 75, 64, 1) 100%
            );
          }

          .number-slide3 {
            background: rgb(182, 255, 64);
            background: linear-gradient(
              128deg,
              rgba(182, 255, 64, 1) 0%,
              rgba(63, 255, 71, 1) 100%
            );
            background: linear-gradient(
              128deg,
              rgba(189, 255, 83, 1) 0%,
              rgba(43, 250, 82, 1) 100%
            );
          }

          .number-slide4 {
            background: rgb(64, 255, 242);
            background: linear-gradient(
              128deg,
              rgba(64, 255, 242, 1) 0%,
              rgba(63, 188, 255, 1) 100%
            );
          }

          .number-slide5 {
            background: rgb(255, 64, 156);
            background: linear-gradient(
              128deg,
              rgba(255, 64, 156, 1) 0%,
              rgba(255, 63, 63, 1) 100%
            );
          }
          .number-slide6 {
            background: rgb(64, 76, 255);
            background: linear-gradient(
              128deg,
              rgba(64, 76, 255, 1) 0%,
              rgba(174, 63, 255, 1) 100%
            );
          }

          .navigation-wrapper {
            position: relative;
          }

          .dots {
            display: flex;
            padding: 10px 0;
            justify-content: center;
          }

          .dot {
            border: none;
            width: 10px;
            height: 10px;
            background: #2a63b5;
            opacity: 60%;
            border-radius: 50%;
            margin: 0 5px;
            padding: 5px;
            cursor: pointer;
          }

          .dot:focus {
            outline: none;
          }

          .dot.active {
            background: #2a63b5;
            opacity: 100%;
          }

          .arrow {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            fill: #fff;
            cursor: pointer;
          }

          .arrow--left {
            left: 5px;
          }

          .arrow--right {
            left: auto;
            right: 5px;
          }

          .arrow--disabled {
            fill: rgba(255, 255, 255, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default Section1;
