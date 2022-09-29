import { useTranslation } from "next-i18next";
import React, { useContext, useState, useCallback, useEffect } from "react";
import AppContext from "../../../context/AppContext";
import MapContext from "../../../context/MapContext";
import AnimationCard from "../../core/AnimationCard";
import InformasiPulau from "./InformasiPulau";
import NewPopup from "./NewPopup";
import SidePopup from "./SidePopup";

const ToponimPopup = ({ mapLoad }) => {
  const { t } = useTranslation("popupPulau");
  const { handleSetSnack } = useContext(AppContext);
  const { map } = useContext(MapContext);
  const [featureId, setFeatureId] = useState(null);
  const [featureGeom, setFeatureGeom] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [infoPulau, setInfoPulau] = useState({});
  const [activeFeature, setActiveFeature] = useState("");
  const [loading, setLoading] = useState(false);
  const [detailPulau, setDetailPulau] = useState({});
  const getPopup = useCallback(async (id, geom) => {
    try {
      setIsOpen(false);
      setLoading(true);
      const response = await fetch("/api/titik-pulau/" + id + "/popup", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (response.status === 200) {
        setInfoPulau({
          ...result,
          long: geom.coordinates[0],
          lat: geom.coordinates[1],
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    } finally {
      setLoading(false);
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
    if (featureId && featureGeom) {
      //   getPopupDetail(featureId);
      getPopup(featureId, featureGeom);
    }
  }, [featureId, featureGeom]);

  return (
    <NewPopup
      layername='Toponim_Pulau'
      setFeatureId={(el) => setFeatureId(el)}
      setFeatureGeom={(el) => setFeatureGeom(el)}
      map={map}
      mapLoad={mapLoad}
      title={t("headerPopup")}
    >
      <div className='p-2 rounded-xl'>
        <hr />

        {!loading ? (
          <InformasiPulau
            getPopupDetail={getPopupDetail}
            infoPulau={infoPulau}
            setIsOpen={setIsOpen}
            setActiveFeature={setActiveFeature}
            toggle={() => {}}
          />
        ) : (
          <div className='h-[300px] w-[296px] flex items-center justify-center'>
            <img src='/images/loader.svg' alt='loader' className='w-16 h-16' />
          </div>
        )}

        <AnimationCard
          isShowing={isOpen}
          position={"right"}
          addStyle='w-[13.5rem] top-0'
        >
          <SidePopup
            setIsOpen={setIsOpen}
            feature={activeFeature}
            detailPulau={detailPulau}
            infoPulau={infoPulau}
          />
        </AnimationCard>
      </div>
    </NewPopup>
  );
};

export default ToponimPopup;
