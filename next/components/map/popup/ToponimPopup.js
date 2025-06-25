import { useTranslation } from "next-i18next";
import React, { useContext, useState, useCallback, useEffect } from "react";
import AppContext from "../../../context/AppContext";
import MapContext from "../../../context/MapContext";
import AnimationCard from "../../core/AnimationCard";
import InformasiPulau from "./InformasiPulau";
import NewPopup from "./NewPopup";
import SidePopup from "./SidePopup";
import InformasiPulau_Terluar from "./InformasiPulau_Terluar";

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
  const [activeLayer, setActiveLayer] = useState(null); 

  /**
   * =========================
   *  FETCH DATA POPUP UTAMA
   * =========================
   */
  const getPopup = useCallback(
    async (id, geom, layer) => {
      try {
        setIsOpen(false);
        setLoading(true);

        let apiUrl = "";
        if (layer === "titik-pulau") {
          apiUrl = `/api/titik-pulau/${id}/popup`;
        } else if (layer === "pulau-terluar") {
          apiUrl = `/api/pulau-terluar/${id}/popup`;
        } else {
          setLoading(false);
          return;
        }

        const response = await fetch(apiUrl, {
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
    },
    [handleSetSnack]
  );

  /**
   * =========================
   *  FETCH DATA POPUP DETAIL
   * =========================
   * Endpoint disesuaikan berdasarkan layer aktif
   */
  const getPopupDetail = useCallback(
    async (id) => {
      try {
        let apiUrl = "";
        if (activeLayer === "titik-pulau") {
          apiUrl = `/api/titik-pulau/${id}/popup-detail`;
        } else if (activeLayer === "pulau-terluar") {
          apiUrl = `/api/pulau-terluar/${id}/popup-detail`;
        } else {
          return;
        }

        const response = await fetch(apiUrl, {
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
    },
    [handleSetSnack, activeLayer]
  );

  /**
   * Jika featureId & geom berubah → ambil data popup
   */
  useEffect(() => {
    if (featureId && featureGeom && activeLayer) {
      getPopup(featureId, featureGeom, activeLayer);
    }
  }, [featureId, featureGeom, activeLayer, getPopup]);

  return (
    <>
      {/* ========================================================= */}
      {/* BLOK UNTUK TITIK PULAU */}
      {/* ========================================================= */}
      <NewPopup
        layername="Toponim_Pulau"
        setFeatureId={(el) => {
          setFeatureId(el);
          setActiveLayer("titik-pulau");
        }}
        setFeatureGeom={(el) => setFeatureGeom(el)}
        map={map}
        mapLoad={mapLoad}
        title={t("headerPopup")}
      >
        <div className="p-2 rounded-xl">
          <hr />
          {!loading ? (
            <InformasiPulau
              // getPopupDetail dipanggil dengan id & layer aktif
              getPopupDetail={getPopupDetail}
              infoPulau={infoPulau}
              setIsOpen={setIsOpen}
              setActiveFeature={setActiveFeature}
              toggle={() => {}}
            />
          ) : (
            <div className="h-[300px] w-[296px] flex items-center justify-center">
              <img src="/images/loader.svg" alt="loader" className="w-16 h-16" />
            </div>
          )}
          <AnimationCard isShowing={isOpen} position={"right"} addStyle="w-[13.5rem] top-0">
            <SidePopup
              setIsOpen={setIsOpen}
              feature={activeFeature}
              detailPulau={detailPulau}
              infoPulau={infoPulau}
              activeLayer={activeLayer}
            />
          </AnimationCard>
        </div>
      </NewPopup>

      {/* ========================================================= */}
      {/* BLOK UNTUK PULAU TERLUAR */}
      {/* ========================================================= */}
      <NewPopup
        layername="PPKT"
        setFeatureId={(el) => {
          setFeatureId(el);
          setActiveLayer("pulau-terluar");
        }}
        setFeatureGeom={(el) => setFeatureGeom(el)}
        map={map}
        mapLoad={mapLoad}
        title={t("headerPopup")}
      >
        <div className="p-2 rounded-xl">
          <hr />
          {!loading ? (
            <InformasiPulau_Terluar
              getPopupDetail={getPopupDetail}
              infoPulau={infoPulau}
              setIsOpen={setIsOpen}
              setActiveFeature={setActiveFeature}
              toggle={() => {}}
            />
          ) : (
            <div className="h-[300px] w-[296px] flex items-center justify-center">
              <img src="/images/loader.svg" alt="loader" className="w-16 h-16" />
            </div>
          )}
          <AnimationCard isShowing={isOpen} position={"right"} addStyle="w-[13.5rem] top-0">
            <SidePopup
              setIsOpen={setIsOpen}
              feature={activeFeature}
              detailPulau={detailPulau}
              infoPulau={infoPulau}
              activeLayer={activeLayer}
            />
          </AnimationCard>
        </div>
      </NewPopup>
    </>
  );
};

export default ToponimPopup;