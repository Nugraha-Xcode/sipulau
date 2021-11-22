import React, { useContext, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import PopupContext from "../../../context/PopupContext";
import useToggle from "../../../utils/useToggle";
import Modal from "../../modal";

const popupItems = [
  {
    label: "ID Pulau",
    value: "id_toponim",
  },
  {
    label: "Kabupaten / Kota",
    value: "wadmkk",
  },
  {
    label: "Provinsi",
    value: "wadmpr",
  },
  {
    label: "Longitude",
    value: "long",
  },
  {
    label: "Latitude",
    value: "lat",
  },
];

const dummy = [1, 2];

const InformasiPulau = ({ setActiveFeature, setIsOpen, toggle }) => {
  const { infoPulau, getPopupDetail } = useContext(PopupContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    spacing: 5,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  const [isShowing, toggleModal] = useToggle();

  return (
    <>
      <div className='md:p-4'>
        <div className='relative w-full'>
          <div className='navigation-wrapper'>
            <div ref={sliderRef} className='keen-slider h-36 w-[296px]'>
              {[
                infoPulau.foto1,
                infoPulau.foto2,
                infoPulau.foto3,
                infoPulau.foto4,
              ].map((el, index) => (
                <div
                  className='keen-slider__slide flex items-center justify-center rounded-lg'
                  key={index}
                >
                  {el ? (
                    <img src={el} alt='popup' />
                  ) : (
                    <img src='images/empty-state-popup.jpg' alt='empty popup' />
                  )}
                </div>
              ))}
            </div>
          </div>
          {slider && (
            <div className='dots absolute bottom-0 left-1/2 transform -translate-x-1/2'>
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
        </div>
        <div className='flex flex-col gap-3 py-4'>
          <p className='text-center text-sm text-black-2 tracking-wide font-semibold'>
            {infoPulau.nammap || "-"}
          </p>
          {popupItems.map((el, index) => (
            <div className='flex gap-2 text-black-2 text-xs' key={index}>
              <div className='flex justify-between w-1/2'>
                <p>{el.label}</p>
                <p>:</p>
              </div>
              <p className='w-1/2'>{infoPulau[el.value] || "-"}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <button
            className='text-main-blue'
            onClick={() => {
              getPopupDetail(infoPulau.id_toponim);
              if (window.innerWidth >= 768) setIsOpen(true);
              setActiveFeature("detail");
            }}
          >
            <p className='text-xs'>Lihat Detail Informasi</p>
          </button>
        </div>
      </div>
      <hr className='my-4 md:my-0' />
      <div className='md:p-4 flex flex-col gap-2'>
        <div className='flex justify-between'>
          <p className='text-black-2 text-xs'>
            {infoPulau.jumlahKomentar} Komentar
          </p>
          <button
            className='text-main-blue text-xs'
            onClick={() => {
              // getComment(infoPulau.id_toponim);
              if (window.innerWidth >= 768) setIsOpen(true);
              setActiveFeature("comment");
            }}
          >
            Lihat Komentar {">"}
          </button>
        </div>
        <button
          className='w-full bg-main-blue text-white p-2 rounded-lg text-sm'
          onClick={() => {
            if (window.innerWidth >= 768) {
              toggle();
            } else {
              toggleModal();
            }
          }}
        >
          Tambah Komentar
        </button>
      </div>
      <Modal isShowing={isShowing} handleModal={toggleModal} size='md'>
        <div className='p-3 space-y-5'>
          <div className='flex justify-end'>
            <button onClick={toggle}>
              <img src='/images/ic-close.svg' alt='close button' />
            </button>
          </div>
          <div className='flex flex-col text-center items-center justify-center gap-3 px-5'>
            <img
              src='/images/ic-desktop.jpg'
              alt='desktop icon'
              className='w-3/4'
            />
            <p className='text-xs text-black-2 font-semibold'>
              Akses dengan Desktop
            </p>
            <p className='text-xs text-main-gray'>
              Mohon maaf, untuk fitur ini hanya dapat diakses menggunakan
              desktop
            </p>
          </div>
          <div className='px-5'>
            <button
              onClick={toggleModal}
              className='text-sm bg-main-blue text-white w-full p-2 rounded-md'
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
      <style jsx>
        {`
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
            width: 6px;
            height: 6px;
            background: #2a63b5;
            opacity: 60%;
            border-radius: 50%;
            margin: 0 3px;
            padding: 4px;
            cursor: pointer;
          }

          .dot:focus {
            outline: none;
          }

          .dot.active {
            background: #2a63b5;
            opacity: 100%;
          }
        `}
      </style>
    </>
  );
};

export default InformasiPulau;
