import React, { useState, useCallback, useContext } from "react";
import shallow from "zustand/shallow";
import AppContext from "../../context/AppContext";
import { useDownloadAoi } from "../../hooks";
import { useNav } from "../../hooks/useNav";
import {
  AboutContent,
  Accordion,
  AreaInterest,
  FileFormatDownload,
  LayerListDownload,
  Dropdown,
} from "./sidebar-content";

const SideDownload = () => {
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );
  const [isLoad, setIsLoad] = useState(false);

  // dropdown value select by province
  const provinceValue = [
    { name: "Kepulauan Riau" },
    { name: "Lampung" },
    { name: "Maluku" },
    { name: "Maluku Utara" },
    { name: "Nusa Tenggara Barat" },
    { name: "Nusa Tenggara Timur" },
    { name: "Papua" },
  ];

  // selected value from dropdown
  const { handleSetSnack, authToken } = useContext(AppContext);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [type, setType] = useState({ label: "CSV", value: "csv" });
  const [drawItem] = useDownloadAoi((state) => [state.drawItem], shallow);

  const buildObjBody = useCallback(() => {
    let objBody = {};
    if (Array.isArray(drawItem) && drawItem.length > 0) {
      // create multipolygon
      const multiPolygon = { type: "MultiPolygon", coordinates: [] };
      for (const poly of drawItem) {
        multiPolygon.coordinates.push(poly.geometry.coordinates);
      }
      objBody.aoi = multiPolygon;
    }
    return objBody;
  }, [drawItem]);

  const handleDownloadCsv = useCallback(
    async (e) => {
      umami.trackEvent("from-aoi", "download");
      try {
        setIsLoad(true);
        const objBody = buildObjBody();
        console.log(objBody);
        console.log(authToken);
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
        console.log(resData);
        let anchor = document.createElement("a");
        const href = window.URL.createObjectURL(resData);
        anchor.href = href;
        anchor.download = "titik-pulau.csv";
        anchor.click();
        window.URL.revokeObjectURL(href);
        anchor.remove();
      } catch (error) {
        console.log(error);
        handleSetSnack(error.message, "error");
      } finally {
        setIsLoad(false);
      }
    },
    [buildObjBody, authToken]
  );

  const handleDownloadShp = useCallback(
    async (e) => {
      umami.trackEvent("from-aoi", "download");
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
      }
    },
    [buildObjBody, authToken]
  );

  return (
    <div className='flex h-full flex-col px-4 pt-9 pb-6 dark:bg-gray-800'>
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
            <Accordion name='Select by Province'>
              {/* dropdown component should pass value props for the value of the dropdown and should pass the selected value instead */}
              <Dropdown
                value={provinceValue}
                onValueSelected={(item) => setSelectedValue(item)}
                valueSelected={selectedValue}
                label='Select Province'
                direction='down'
              />
            </Accordion>

            <Accordion name='Area of Interest'>
              <AreaInterest />
            </Accordion>

            <Accordion name='Selected Layer'>
              <LayerListDownload />
            </Accordion>
          </div>

          <FileFormatDownload
            type={type}
            setType={setType}
            handleDownloadCsv={handleDownloadCsv}
            handleDownloadShp={handleDownloadShp}
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

export default SideDownload;
