import React, { useState, useEffect, useContext, useCallback } from "react";
import shallow from "zustand/shallow";
import AppContext from "../../../context/AppContext";
import { useNetwork } from "../../../hooks";
import { useNav } from "../../../hooks/useNav";
import Loader from "../../core/Loader";
import NetworkNodeCategorySelection from "./NetworkNodeCategorySelection";
import NetWorkNodeResult from "./NetworkNodeResult";

const NetworkNode = () => {
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );
  const [
    setOrganizationList,
    selectedOrganization,
    setTotalData,
    setSimpulList,
    simpulList,
    setDaftarLayanan,
  ] = useNetwork((state) => [
    state.setOrganizationList,
    state.selectedOrganization,
    state.setTotalData,
    state.setSimpulList,
    state.simpulList,
    state.setDaftarLayanan,
  ]);
  const { handleSetSnack } = useContext(AppContext);
  const [isFetch, setIsFetch] = useState(false);

  const [isLoad, setIsLoad] = useState(false);

  const getOrganizationList = useCallback(async () => {
    try {
      setIsLoad(true);
      const res = await fetch(
        "https://tanahair.indonesia.go.id/sdi/api/3/action/organization_list?all_fields=true&include_extras=true",
        {
          method: "GET",
        }
      );
      const resData = await res.json();

      if (resData.result.length > 0) {
        let a = resData.result.filter((el) => {
          if (el.extras[0]) {
            return el;
          }
        });
        setOrganizationList(
          a.map((el) => {
            return {
              label: el.title,
              value: el.name,
              category: el.extras[0].value,
            };
          })
        );
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    } finally {
      setIsLoad(false);
    }
  }, []);

  const getSimpulList = useCallback(
    async (currentPage) => {
      setIsFetch(true);
      try {
        const params = new URLSearchParams({
          fq: "organization:" + selectedOrganization.value,
          start: (currentPage - 1) * 10,
        });
        const res = await fetch(
          "https://tanahair.indonesia.go.id/sdi/api/3/action/package_search?" +
            params,

          {
            method: "GET",
          }
        );
        const resData = await res.json();
        if (res.status === 200) {
          setSimpulList(resData.result.results);
          setTotalData(resData.result.count);
          // setIsResult(true);
        }
      } catch (error) {
        handleSetSnack(error.message, "error");
      } finally {
        setIsFetch(false);
      }
    },
    [selectedOrganization]
  );

  useEffect(() => {
    const daftarLayananArr = [];
    for (let index in simpulList) {
      const extras = simpulList[index].extras;
      let minX = 0;
      let minY = 0;
      let maxX = 0;
      let maxY = 0;
      let srs = null;
      for (let row in extras) {
        switch (extras[row].key) {
          case "bbox-east-long":
            maxX = extras[row].value;
            break;
          case "bbox-north-lat":
            maxY = extras[row].value;
            break;
          case "bbox-south-lat":
            minY = extras[row].value;
            break;
          case "bbox-west-long":
            minX = extras[row].value;
            break;
          case "spatial-reference-system":
            srs = extras[row].value.replace("urn:ogc:def:crs:", "");
            break;
        }
      }
      const resources = simpulList[index].resources;
      for (let row in resources) {
        if (resources[row].format === "Esri REST") {
          const layanan = {
            judul: simpulList[index].title,
            nama: resources[row].name,
            url: resources[row].url,
            format: resources[row].format,
            simpul: simpulList[index].organization.title,
            bbox: minX + "," + minY + "," + maxX + "," + maxY,
            srs: srs,
          };
          daftarLayananArr.push(layanan);
        } else if (
          resources[row].format === "" &&
          resources[row].resource_locator_protocol === "ESRI:ArcGIS:MapServer"
        ) {
          const layanan = {
            judul: simpulList[index].title,
            nama: resources[row].name,
            url: resources[row].url,
            format: "Esri REST",
            simpul: simpulList[index].organization.title,
            bbox: minX + "," + minY + "," + maxX + "," + maxY,
            srs: srs,
          };
          daftarLayananArr.push(layanan);
        } else if (
          resources[row].format === "WMS" &&
          resources[row].resource_locator_protocol.substring(0, 7) === "OGC:WMS"
        ) {
          const layanan = {
            judul: simpulList[index].title,
            nama: resources[row].name,
            url: resources[row].url,
            format: resources[row].format,
            simpul: simpulList[index].organization.title,
            bbox: minX + "," + minY + "," + maxX + "," + maxY,
            srs: srs,
          };

          daftarLayananArr.push(layanan);
        } else if (
          resources[row].format === "" &&
          resources[row].resource_locator_protocol.substring(0, 7) === "OGC:WMS"
        ) {
          const layanan = new Layanan({
            judul: simpulList[index].title,
            nama: resources[row].name,
            url: resources[row].url + "?",
            format: "WMS",
            simpul: simpulList[index].organization.title,
            bbox: minX + "," + minY + "," + maxX + "," + maxY,
            srs: "EPSG:" + srs,
          });
          daftarLayananArr.push(layanan);
        } else if (
          resources[row].format === "" &&
          resources[row].resource_locator_protocol.substring(0, 7) === "GeoJSON"
        ) {
          const layanan = new Layanan({
            judul: simpulList[index].title,
            nama: resources[row].name,
            url: resources[row].url,
            format: "GeoJSON",
            simpul: simpulList[index].organization.title,
            bbox: minX + "," + minY + "," + maxX + "," + maxY,
            srs: srs,
          });
          daftarLayananArr.push(layanan);
        }
      }
    }
    setDaftarLayanan(daftarLayananArr);
  }, [simpulList]);

  return (
    <div className='flex h-full flex-col px-4 pt-9 pb-6 dark:bg-gray-800'>
      <div>
        <div className='flex items-center justify-between '>
          <p className='text-xl text-gray-800 dark:text-gray-100'>
            {activeSideFeature?.label || ""}
          </p>
          <button onClick={() => setActiveSideFeature(null)}>
            <img src='/images/ic-close.svg' alt='close button' className='' />
          </button>
        </div>
        <hr className='my-3 text-gray-200' />
      </div>
      <div className='flex flex-1 flex-col gap-2 overflow-y-auto hide-scrollbar'>
        <NetworkNodeCategorySelection
          getSimpulList={(currentPage) => getSimpulList(currentPage)}
          getOrganizationList={getOrganizationList}
          isLoad={isLoad}
        />
        {!simpulList ? (
          <Loader show={isFetch} />
        ) : (
          <NetWorkNodeResult
            getSimpulList={(currentPage) => getSimpulList(currentPage)}
            isFetch={isFetch}
          />
        )}
      </div>

      {/* <div className='mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700'>
        <AboutContent header='About Network Data'>Lorem ipsum </AboutContent>
      </div> */}
    </div>
  );
};

export default NetworkNode;
