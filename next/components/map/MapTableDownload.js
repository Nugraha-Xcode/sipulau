import React, { useContext, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import useToggle from "../../utils/useToggle";
import Select from "../core/select";
import Modal from "../modal";
import AppContext from "../../context/AppContext";
import MapContext from "../../context/MapContext";

const MapTableDownload = ({
  toggledRow,
  isSelectAll,
  drawItem,
  toggle,
  source,
}) => {
  const { t } = useTranslation("sideBarRight");
  const { handleSetSnack, authToken } = useContext(AppContext);
  const { bbox, activeFilter } = useContext(MapContext);

  const [isLoad, setIsLoad] = useState(false);
  const [type, setType] = useState({ label: "csv", value: "csv" });

  const buildObjBody = useCallback(() => {
    let objBody = {};
    if (activeFilter.length > 0) {
      activeFilter.forEach((el) => {
        objBody[el.value] = el.content;
      });
    }
    if (Array.isArray(toggledRow) && toggledRow.length > 0) {
      if (isSelectAll) {
        objBody["unselected"] = toggledRow.map((el) => parseInt(el.id));
      } else {
        objBody["selected"] = toggledRow.map((el) => parseInt(el.id));
      }
    }
    if (bbox) {
      objBody.bbox = { ...bbox };
    }
    if (Array.isArray(drawItem) && drawItem.length > 0) {
      // create multipolygon
      const multiPolygon = { type: "MultiPolygon", coordinates: [] };
      for (const poly of drawItem) {
        multiPolygon.coordinates.push(poly.geometry.coordinates);
      }
      objBody.aoi = multiPolygon;
    }
    return objBody;
  }, [bbox, activeFilter, toggledRow, isSelectAll, drawItem]);

  const handleDownloadCsv = useCallback(
    async (e) => {
      umami.trackEvent(source, "download");
      try {
        setIsLoad(true);
        const objBody = buildObjBody();
        const response = await fetch("/api/titik-pulau/download/csv", {
          method: "POST",
          body: JSON.stringify(objBody),
          headers: { Authorization: "Bearer " + authToken },
        });
        if (response.status !== 200) {
          const resJson = await response.json();
          throw Error(resJson.message);
        }

        const resData = await response.blob();
        let anchor = document.createElement("a");
        const href = window.URL.createObjectURL(resData);
        anchor.href = href;
        anchor.download = "titik-pulau.csv";
        anchor.click();
        window.URL.revokeObjectURL(href);
        anchor.remove();
      } catch (error) {
        handleSetSnack(error.message, "error");
      } finally {
        setIsLoad(false);
        if (source === "from-table") {
          toggle();
        }
      }
    },
    [source, toggle, buildObjBody]
  );

  const handleDownloadShp = useCallback(
    async (e) => {
      umami.trackEvent(source, "download");
      try {
        setIsLoad(true);
        const objBody = buildObjBody();
        const response = await fetch("/api/titik-pulau/download/shp", {
          method: "POST",
          body: JSON.stringify(objBody),
          headers: { Authorization: "Bearer " + authToken },
        });
        const resData = await response.json();
        if (response.status !== 200) {
          throw Error(resData.message);
        }

        let anchor = document.createElement("a");
        anchor.href = resData.url + "&access_token=" + authToken;
        anchor.click();
        anchor.remove();
      } catch (error) {
        handleSetSnack(error.message, "error");
      } finally {
        setIsLoad(false);
        if (source === "from-table") {
          toggle();
        }
      }
    },
    [source, toggle, buildObjBody]
  );

  return (
    <div className='py-2 space-y-4'>
      <div>
        <p className='text-xs mb-1 text-black-2'>{t("formatFile")}</p>
        <Select
          value={type}
          placeholder={"Pilih Format File"}
          items={[
            { label: "csv", value: "csv" },
            { label: "shp", value: "shp" },
          ]}
          onChange={(item) => {
            setType(item);
          }}
        />
      </div>
      {isLoad ? (
        <div className='w-full flex items-center justify-center'>
          <img src='images/loader.svg' alt='loader' className='w-10' />
        </div>
      ) : (
        <button
          className='text-white bg-main-blue rounded-lg py-2 mx-auto w-full text-sm'
          onClick={() => {
            type.value === "csv" ? handleDownloadCsv() : handleDownloadShp();
          }}
        >
          {t("buttonDownload")}
        </button>
      )}
    </div>
  );
};

export default MapTableDownload;
