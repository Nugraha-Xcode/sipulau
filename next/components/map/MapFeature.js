import React, { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import MemoIcLayer from "../core/icons/IcLayer";
import MemoIcBasemap from "../core/icons/IcBasemap";
import MemoIcDownload from "../core/icons/IcDownload";
import MemoIcSearch from "../core/icons/IcSearch";
import MemoIcComment from "../core/icons/IcComment";
import AnimationCard from "../core/AnimationCard";
import FeatureTab from "./FeatureTab";
import MapContext from "../../context/MapContext";
import useToggle from "../../utils/useToggle";
import Modal from "../modal";

const featureItems = [
  { icon: MemoIcLayer, label: "button1", value: "layer" },
  { icon: MemoIcSearch, label: "button2", value: "search" },
  { icon: MemoIcBasemap, label: "button3", value: "basemap" },
  { icon: MemoIcDownload, label: "button4", value: "download" },
  { icon: MemoIcComment, label: "button5", value: "comment" },
];

const MapFeature = () => {
  const { t } = useTranslation("sideBarRight");
  const {
    setIsOpenDrawer,
    activeFeature,
    setActiveFeature,
    isOpenFeature,
    setIsOpenFeature,
    toggleMapFilter,
  } = useContext(MapContext);
  const [isShowing, toggle] = useToggle();
  const [drawItem, setDrawItem] = useState([]);
  const [drawSelected, setDrawSelected] = useState([]);

  const handleOpenTab = useCallback(
    (value) => {
      let valueCheck = ["search", "download", "comment"];
      if (valueCheck.indexOf(value) !== -1) {
        if (window.innerWidth >= 768) {
          if (value === "search") {
            setActiveFeature(value);
            setIsOpenFeature(false);
            toggleMapFilter();
            setIsOpenDrawer(true);
          } else {
            if (activeFeature !== value) {
              setIsOpenFeature(false);

              setTimeout(() => {
                setActiveFeature(value);
                setIsOpenFeature(true);
              }, 500);
            } else {
              setActiveFeature("");
              setIsOpenFeature(false);
            }
          }
        } else {
          toggle();
        }
      } else {
        if (activeFeature === "") {
          setActiveFeature(value);
          setIsOpenFeature(true);
        } else {
          if (activeFeature !== value) {
            setIsOpenFeature(false);

            setTimeout(() => {
              setActiveFeature(value);
              setIsOpenFeature(true);
            }, 500);
          } else {
            setActiveFeature("");
            setIsOpenFeature(false);
          }
        }
      }
    },
    [activeFeature]
  );

  return (
    <div className='font-map absolute top-40 md:top-24 right-2 md:right-6 z-10 shadow-map-1 bg-white rounded-xl p-1 flex flex-col gap-1'>
      {featureItems.map((el, index) => (
        <div
          onClick={() => handleOpenTab(el.value)}
          className={`flex flex-col items-center justify-center ${
            activeFeature === el.value
              ? "bg-blue-2 border-blue-3 border"
              : "bg-white"
          } w-12 md:w-16 h-12 md:h-16 rounded-lg hover:bg-blue-2 hover:border-blue-3 pt-1 z-0 cursor-pointer`}
          key={index}
        >
          <el.icon active={activeFeature === el.value} />
          <p className='text-[0.5rem] text-main-gray'>{t(el.label)}</p>
        </div>
      ))}
      <AnimationCard isShowing={isOpenFeature} position='left'>
        <FeatureTab
          feature={activeFeature}
          setIsOpenFeature={setIsOpenFeature}
          setActiveFeature={setActiveFeature}
          setDrawItem={setDrawItem}
          drawItem={drawItem}
          drawSelected={drawSelected}
          setDrawSelected={setDrawSelected}
        />
      </AnimationCard>
      <Modal isShowing={isShowing} handleModal={toggle} size='md'>
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
              onClick={toggle}
              className='text-sm bg-main-blue text-white w-full p-2 rounded-md'
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MapFeature;
