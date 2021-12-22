import Image from "next/image";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect, useRef } from "react";

const ArrowLeft = (props) => {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <div
      data-cy='carousel-left-button'
      className='hidden md:block w-5 h-5 absolute z-50 top-1/2 left-10 transform -translate-y-1/2 text-[#3C5373] cursor-pointer'
    >
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
    <div
      data-cy='carousel-right-button'
      className='hidden md:block w-5 h-5 absolute z-50 top-1/2 right-10 transform -translate-y-1/2 text-[#3C5373] cursor-pointer'
    >
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
  const carouselRef = useRef(null);
  const [pause, setPause] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedSlide, setLoadedSlide] = useState(false);
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
    created() {
      setLoadedSlide(true);
    },
  });

  useEffect(() => {
    carouselRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });

    carouselRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [carouselRef]);

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
    <div className='relative' ref={carouselRef}>
      {slider && (
        <ArrowLeft
          onClick={(e) => e.stopPropagation() || slider.prev()}
          disabled={currentSlide === 0}
        />
      )}
      <div
        data-cy='home-section-1-carousel'
        ref={sliderRef}
        className='keen-slider'
      >
        {items.map((el, index) => (
          <div className='keen-slider__slide' key={index}>
            <div className='min-h-[80vh] md:min-h-screen relative flex items-center justify-center filter'>
              <Image
                data-cy={`carousel-image-${index}`}
                src={el.imgSrc}
                alt={"carousel" + index}
                layout='fill'
                objectFit='cover'
                className=''
                priority={true}
              />
              {/* <div className='absolute w-full min-h-screen bg-red-500'></div> */}
              <div className='flex flex-col items-center text-white text-center space-y-6 z-10 p-4 w-full md:w-3/4'>
                <p
                  data-cy={`carousel-subtitle-${index}`}
                  className='font-bold text-lg md:text-xl lg:text-2xl text-[#3C5373] '
                >
                  {el.subTitle && el.subTitle}
                </p>
                <h1
                  data-cy={`carousel-title-${index}`}
                  className='font-medium text-[#3C5373]'
                >
                  {el.title && el.title}
                </h1>
                <p
                  data-cy={`carousel-text-${index}`}
                  className='font-medium text-[#3C5373] text-opacity-80 text-sm md:text-[1.225rem] lg:text-[1.375rem] leading-5 lg:leading-8 '
                >
                  {el.text && el.text}
                </p>
                {el.buttonLabel && (
                  <Link href={el.buttonHref}>
                    <button
                      onClick={() => {}}
                      className={`flex lg:text-lg space-x-2 bg-main-blue
                   rounded-full text-white
                    text-sm py-3 lg:py-5 px-5 lg:px-8 hover:opacity-80 drop-shadow-2xl`}
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
      {loadedSlide ? null : (
        <div className='w-full min-h-screen bg-white absolute top-0 z-50'></div>
      )}
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
