import React, {
  useState,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import shallow from "zustand/shallow";
import AppContext from "../../../context/AppContext";
import MapContext from "../../../context/MapContext";
import { useAuth, useDownloadAoi } from "../../../hooks";
import { useNav } from "../../../hooks/useNav";
import { Accordion, Dropdown } from "../sidebar-content";
import AreaInterest from "./AreaInterest";
import FileFormatDownload from "./FileFormatDownload";
import LayerListDownload from "./LayerListDownload";

const Download = () => {
  const { draw } = useContext(MapContext);
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );
  const [active, setActive] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const [listProvince, setListProvince] = useState(null);

  // selected value from dropdown
  const { handleSetSnack } = useContext(AppContext);
  const authToken = useAuth((state) => state.authToken);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [type, setType] = useState({ label: "CSV", value: "csv" });
  const [drawItem, selectedLayer, setDrawItem, setDrawSelected] =
    useDownloadAoi(
      (state) => [
        state.drawItem,
        state.selectedLayer,
        state.setDrawItem,
        state.setDrawSelected,
      ],
      shallow
    );
  const drawItemRef = useRef(null);

  useEffect(() => {
    drawItemRef.current = drawItem;
  }, [drawItem]);

  const handleDownloadCsv = useCallback(
    async (objBody) => {
      umami.trackEvent("from-aoi", "download");
      try {
        setIsLoad(true);
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
      }
    },
    [authToken]
  );

  const handleDownloadShp = useCallback(
    async (objBody) => {
      umami.trackEvent("from-aoi", "download");
      try {
        setIsLoad(true);
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
      }
    },
    [authToken]
  );

  const download = useCallback(() => {
    if (active === "aoi") {
      if (Array.isArray(drawItem) && drawItem.length > 0) {
        let objBody = {};
        // create multipolygon
        const multiPolygon = { type: "MultiPolygon", coordinates: [] };
        for (const poly of drawItem) {
          multiPolygon.coordinates.push(poly.geometry.coordinates);
        }
        objBody.aoi = multiPolygon;
        type.value === "csv"
          ? handleDownloadCsv(objBody)
          : handleDownloadShp(objBody);
      }
    } else if (active === "upload") {
      if (selectedLayer) {
        let objBody = {};
        const multiPolygon = { type: "MultiPolygon", coordinates: [] };
        for (const poly of selectedLayer.data.features) {
          if (poly.geometry.type === "MultiPolygon") {
            multiPolygon.coordinates.push(...poly.geometry.coordinates);
          } else if (poly.geometry.type === "Polygon") {
            multiPolygon.coordinates.push(poly.geometry.coordinates);
          }
        }
        objBody.aoi = multiPolygon;
        type.value === "csv"
          ? handleDownloadCsv(objBody)
          : handleDownloadShp(objBody);
      }
    } else if (active === "province") {
      if (selectedValue) {
        let objBody = {};
        objBody.wadmpr = selectedValue.value;
        type.value === "csv"
          ? handleDownloadCsv(objBody)
          : handleDownloadShp(objBody);
      }
    }
  }, [drawItem, type, selectedLayer, selectedValue, active]);

  const getProvince = useCallback(async () => {
    try {
      const response = await fetch("/api/titik-pulau/provinsi", {
        method: "GET",
      });

      const resData = await response.json();
      if (resData.length) {
        let list = [];
        for (const item of resData) {
          list.push({ label: item, value: item });
        }
        setListProvince(list);
      }
      if (response.status !== 200) {
        throw Error(resData.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, []);

  useEffect(() => {
    getProvince();
    return () => {
      if (drawItemRef.current.length)
        for (const item of drawItemRef.current) {
          draw.delete(item.id);
        }
      setDrawItem([]);
      setDrawSelected([]);
    };
  }, []);

  return (
    <div
      id='side-feature-content'
      className='flex h-full flex-col px-4 pt-20 pb-6 dark:bg-gray-800'
    >
      <div>
        <div className='flex items-center justify-between '>
          <p className='text-gray-800 dark:text-gray-100'>
            {activeSideFeature?.label || ""}
          </p>
          <button onClick={() => setActiveSideFeature(null)}>
            <img src='/images/ic-close.svg' alt='close button' className='' />
          </button>
        </div>
        <hr className='my-3 text-gray-200' />
      </div>
      <div className='flex flex-1 flex-col gap-2 overflow-y-auto'>
        <div className='flex flex-col h-full  justify-between'>
          <div className='flex flex-col gap-2 h-full w-full'>
            {/* pass children props for fill the content of the accordion & pass name for the name of accordion */}
            <Accordion
              id='province'
              label='Select by Province'
              activeId={active}
              isOpen={active === "province"}
              setValue={setActive}
            >
              {/* dropdown component should pass value props for the value of the dropdown and should pass the selected value instead */}
              <Dropdown
                value={listProvince}
                onValueSelected={(item) => setSelectedValue(item)}
                valueSelected={selectedValue}
                label='Select Province'
                direction='down'
              />
            </Accordion>

            <Accordion
              id='aoi'
              label='Area of Interest'
              activeId={active}
              isOpen={active === "aoi"}
              setValue={setActive}
            >
              <AreaInterest />
            </Accordion>

            <Accordion
              id='upload'
              label='Selected Layer'
              activeId={active}
              isOpen={active === "upload"}
              setValue={setActive}
            >
              <LayerListDownload />
            </Accordion>
          </div>

          <FileFormatDownload
            type={type}
            setType={setType}
            handleDownload={download}
          />
        </div>
      </div>

      {/* <div className='mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700'>
        <AboutContent header='About Download'>
          You may download based on Province, Area of Interest, or Selected
          Layer.
        </AboutContent>
      </div> */}
    </div>
  );
};

export default Download;
