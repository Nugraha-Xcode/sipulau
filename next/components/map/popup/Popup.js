import { useRef, useContext, useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import maplibregl from "maplibre-gl";

import { PopupProvider } from "../../../context/PopupContext";
import AppContext from "../../../context/AppContext";
import MapContext from "../../../context/MapContext";
import AnimationCard from "../../core/AnimationCard";
// import BottomDrawer from "../../core/BottomDrawer";
import useToggle from "../../../utils/useToggle";
import InformasiPulau from "./InformasiPulau";
// import MobilePopup from "./MobilePopup";
import SidePopup from "./SidePopup";

const Popup = ({ layername }) => {
  const { t } = useTranslation("popupPulau");
  const popRef = useRef(null);
  const contentRef = useRef(null);

  const { handleSetSnack } = useContext(AppContext);
  const { map } = useContext(MapContext);

  const [isAddComment, openAddComment] = useToggle();
  const [isMobileDrawer, openMobileDrawer] = useToggle();

  const [isOpen, setIsOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState("");
  const [infoPulau, setInfoPulau] = useState({});
  const [detailPulau, setDetailPulau] = useState({});

  const getPopup = useCallback(async (id, coordinates) => {
    try {
      const response = await fetch("/api/titik-pulau/" + id + "/popup", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (response.status === 200) {
        setInfoPulau({ ...result, long: coordinates[0], lat: coordinates[1] });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, []);

  const getPopupDetail = useCallback(async (id) => {
    try {
      const response = await fetch("/api/titik-pulau/" + id + "/popup-detail", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (response.status === 200) {
        setDetailPulau(result);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, []);

  useEffect(() => {
    map.on("click", layername, function (e) {
      setIsOpen(false);
      let coordinates = e.features[0].geometry.coordinates.slice();
      getPopup(e.features[0].id, coordinates);
      if (window.innerWidth >= 768) {
        popRef.current = new maplibregl.Popup({ closeButton: false })
          .setLngLat(coordinates)
          .setDOMContent(contentRef.current)
          .setMaxWidth("450px")
          .addTo(map);
      } else {
        openMobileDrawer();
      }
    });
    map.on("mouseenter", layername, function () {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", layername, function () {
      map.getCanvas().style.cursor = "";
    });
    return () => {
      popRef.current && popRef.current.remove();
    };
  }, []);

  return (
    <PopupProvider
      value={{
        infoPulau,
        detailPulau,
        getPopupDetail,
      }}
    >
      <div style={{ display: popRef.current ? "block" : "none" }}>
        <div
          ref={contentRef}
          className='p-2 rounded-xl'
          //   style={{ width: "fit-content", maxWidth: 300, minWidth: 300 }}
        >
          <div className='flex py-3 px-4'>
            <p className='flex-1 text-center text-black-2 tracking-wide font-semibold'>
              {t("headerPopup")}
            </p>
            <button
              onClick={() => {
                popRef.current.remove();
                setIsOpen(false);
              }}
            >
              <img src='/images/ic-close.svg' alt='close button' />
            </button>
          </div>
          <hr />
          {popRef.current ? (
            <InformasiPulau
              setIsOpen={setIsOpen}
              setActiveFeature={setActiveFeature}
              toggle={openAddComment}
            />
          ) : (
            <div className='h-[300px] w-[296px] flex items-center justify-center'>
              <img
                src='/images/loader.svg'
                alt='loader'
                className='w-16 h-16'
              />
            </div>
          )}
          <AnimationCard
            isShowing={isOpen}
            position={"right"}
            addStyle='w-[25rem] top-0'
          >
            <SidePopup setIsOpen={setIsOpen} feature={activeFeature} />
          </AnimationCard>
          {/* <Modal
            isShowing={isAddComment}
            handleModal={openAddComment}
            size='lg'
          >
            <AddComment onClose={openAddComment} type='pulau' />
          </Modal> */}
        </div>
      </div>
      {/* <BottomDrawer
        isShowing={isMobileDrawer}
        toggle={openMobileDrawer}
        title={t("headerPopup")}
      >
        <MobilePopup toggle={openAddComment} />
      </BottomDrawer> */}
    </PopupProvider>
  );
};

export default Popup;
