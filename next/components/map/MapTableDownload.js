import React, { useContext, useCallback, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useToggle from "../../utils/useToggle";
import Select from "../core/select";
import Modal from "../modal";
import AppContext from "../../context/AppContext";
import MapContext from "../../context/MapContext";
import { useAuth } from "../../hooks/useAuth";
import { useAdvanceFilter, useBbox } from "../../hooks";
import Button from "../core/Button";

const MapTableDownload = ({
  toggledRow,
  isSelectAll,
  drawItem,
  toggle,
  source,
}) => {
  const { t } = useTranslation("sideBarRight");
  const { handleSetSnack } = useContext(AppContext);
  const authToken = useAuth((state) => state.authToken);
  const { activeFilter } = useContext(MapContext);
  const bbox = useBbox((state) => state.bbox);
  const advanceFilterQuery = useAdvanceFilter(
    (state) => state.advanceFilterQuery
  );

  const [isLoad, setIsLoad] = useState(false);
  const [type, setType] = useState({ label: "csv", value: "csv" });
  const [ndaModal, setNdaModal] = useState(false);
  const [isAccept, setAccept] = useState(false);

  useEffect(() => {
    setAccept(false);
  }, [ndaModal]);

  const buildObjBody = useCallback(() => {
    let objBody = {};
    let query = [...advanceFilterQuery];
    bbox &&
      query.push({
        geom: {
          _within_bbox: [bbox.xmin, bbox.ymin, bbox.xmax, bbox.ymax],
        },
      });
    if (query.length > 0) {
      objBody["query"] = {
        _and: query,
      };
    }
    if (Array.isArray(toggledRow) && toggledRow.length > 0) {
      if (isSelectAll) {
        objBody["unselected"] = toggledRow.map((el) => parseInt(el.id));
      } else {
        objBody["selected"] = toggledRow.map((el) => parseInt(el.id));
      }
    }
    // if (Array.isArray(drawItem) && drawItem.length > 0) {
    //   // create multipolygon
    //   const multiPolygon = { type: "MultiPolygon", coordinates: [] };
    //   for (const poly of drawItem) {
    //     multiPolygon.coordinates.push(poly.geometry.coordinates);
    //   }
    //   objBody.aoi = multiPolygon;
    // }
    return objBody;
  }, [
    bbox,
    activeFilter,
    toggledRow,
    isSelectAll,
    drawItem,
    advanceFilterQuery,
  ]);

  const handleDownloadCsv = useCallback(
    async (e) => {
      umami.trackEvent(source, "download");
      try {
        setIsLoad(true);
        const objBody = buildObjBody();
        const response = await fetch("/api/titik-pulau/download/csv", {
          method: "POST",
          body: JSON.stringify(objBody),
          headers: {
            Authorization: "Bearer " + authToken,
            "Content-Type": "application/json",
          },
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
          headers: {
            Authorization: "Bearer " + authToken,
            "Content-Type": "application/json",
          },
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
      <div data-cy='download-feature-format-selector'>
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
          data-cy='download-feature-download-button'
          className='text-white bg-main-blue rounded-lg py-2 mx-auto w-full text-sm'
          onClick={() => {
            setNdaModal(true);
          }}
        >
          {t("buttonDownload")}
        </button>
      )}
      <Modal
        isShowing={ndaModal}
        handleModal={() => {
          setNdaModal(false);
        }}
        size='md'
      >
        <div className='py-5 px-8 flex flex-col gap-2'>
          <div className='flex items-center justify-between'>
            <img src='/images/big-logo.svg' alt='logo' className='w-14 h-14' />
            <button
              onClick={() => {
                setNdaModal(false);
              }}
            >
              <img
                src='/images/ic-close.svg'
                alt='close button'
                className='w-3 h-3'
              />
            </button>
          </div>
          <p className='text-xl text-gray-900 font-semibold'>
            Non-Disclosure Agreement (NDA)
          </p>
          <p className='text-xs text-gray-900 text-justify'>
            Informasi Geospasial Dasar (IGD) yang terdapat dalam SI Pulau ini
            adalah produk Badan Informasi Geospasial (BIG) dan hak ciptanya
            dimiliki oleh BIG. Pengguna diijinkan dan dibebaskan untuk
            mengunduh, mendistribusikan, mengadaptasi atau membuat turunan IGD
            yang ada dalam website ini, dengan syarat mencantumkan sumber
            informasi/data berasal dari BIG. Pengguna tidak diperkenankan untuk
            memperjualbelikan kembali segala data yang diperoleh dari SI Pulau
            ini.
          </p>
          <p className='text-xs text-gray-900 text-justify'>Sitasi:</p>
          <p className='text-xs text-gray-900 text-justify'>
            Badan Informasi Geospasial Republik Indonesia, 2021. Titik Toponim
            Pulau Indonesia. Bogor, Jawa Barat. Diakses dari :
            http://sipulau.big.go.id
          </p>
          <div className='flex items-center gap-2 justify-center my-2'>
            <input
              type='checkbox'
              id='acceptTermCondition'
              name='acceptTermCondition'
              onChange={() => {
                setAccept((prev) => !prev);
              }}
            />
            <label
              htmlFor='acceptTermCondition'
              className='text-blue-500 text-xs'
            >
              Accept Terms & Condition
            </label>
          </div>
          <Button
            variant='normal'
            isActive={isAccept}
            onClick={() => {
              type.value === "csv" ? handleDownloadCsv() : handleDownloadShp();
              setNdaModal(false);
            }}
            className='text-sm'
          >
            Download
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default MapTableDownload;
