import { useRef, useState, useEffect, useCallback, useContext } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import shallow from "zustand/shallow";
import clsx from "clsx";
import Head from "next/head";
import Script from "next/script";
import maplibregl from "maplibre-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import SphericalMercator from "@mapbox/sphericalmercator";

import useToggle from "../utils/useToggle";
import { MapProvider } from "../context/MapContext";
import MapTable from "../components/map/MapTable";
import Modal from "../components/modal";
import Filter from "../components/map/Filter";
import AppContext from "../context/AppContext";
import MapLayers from "../components/map/MapLayers";
import SideNav from "../components/navigation/SideNav";
import { useIndexedDB, useNav, useNetwork } from "../hooks";
import MapToolbox from "../components/map/MapToolbox";
import MapToolboxCard from "../components/map/MapToolboxCard";
import BottomDrawer from "../components/core/BottomDrawer";
import GeolocateController from "../components/map/GeolocateController";
import ZoomInController from "../components/map/ZoomInController";
import ZoomOutController from "../components/map/ZoomOutController";
import Legend from "../components/map/legend/Legend";
import MapTrackPointer from "../components/map/MapTrackPointer";
import TopNav from "../components/navigation/TopNav";
import {
  UploadLayerDatabase,
  UploadLayerStore,
  titikPulauMvt,
} from "../constant";

const map = () => {
  const { t } = useTranslation("attributetable");
  const [activeLayer, activeLegend, setActiveLayer] = useNetwork(
    (state) => [state.activeLayer, state.activeLegend, state.setActiveLayer],
    shallow
  );
  const columnObj = [
    { label: t("column1"), value: "fid" },
    { label: t("column2"), value: "id_wilayah" },
    { label: t("column3"), value: "nammap" },
    { label: t("column4"), value: "artinam" },
    { label: t("column5"), value: "aslbhs" },
    { label: t("column6"), value: "sjhnam" },
    { label: t("column14"), value: "id_toponim" },
    { label: t("column15"), value: "luas" },
    { label: t("location"), value: "location" },
    { label: "Remark", value: "remark" },
    { label: "Status", value: "status" },
  ];
  const mapRef = useRef(null);
  const drawRef = useRef(null);
  const mapElementRef = useRef(null);
  const { handleSetSnack } = useContext(AppContext);
  const [isOpenMapFilter, toggleMapFilter] = useToggle();
  const [mapload, setMapLoad] = useState(false);
  const [activeFeature, setActiveFeature] = useState("");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isOpenFeature, setIsOpenFeature] = useState(false);
  const [filterArr, setFilterArr] = useState([]);
  const [activeFilter, setActiveFilter] = useState([]);
  const [queryFilter, setQueryFilter] = useState("");
  const [dataTable, setDataTable] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [toggledRow, setToggledRow] = useState([]);
  const [isOpenBottomDrawer, setOpenBottomDrawer] = useState(false);
  const [isExpandBottomDrawer, setExpandBottomDrawer] = useState(false);
  const [isOpenMapToolbox, setOpenMapToolbox] = useState(false);
  const [isOpenLegend, setOpenLegend] = useState(false);

  const [page, setPage] = useState(1);
  const [column, setColumn] = useState(columnObj);
  const [refreshLayer, setRefreshLayer] = useState(false);
  const [bbox, setBbox] = useState(null);
  // const [activeLegend, setActiveLegend] = useState([]);
  const [drawPoly, setDrawPoly] = useState(false);

  const mercRef = useRef(new SphericalMercator());
  const [setDb, db] = useIndexedDB((state) => [state.setDb, state.db], shallow);

  const fetchRBIStyle = useCallback(async () => {
    let vts =
      "https://geoservices.big.go.id/rbi/rest/services/Hosted/Rupabumi_Indonesia/VectorTileServer";

    let rbiStyle, esriRestService;
    try {
      let [styleRes, esriRestRes] = await Promise.all([
        fetch(vts + "/resources/styles/root.json"),
        fetch(vts + "?f=json"),
      ]);
      [rbiStyle, esriRestService] = await Promise.all([
        styleRes.json(),
        esriRestRes.json(),
      ]);
      let boundsLonLat = mercRef.current.convert([
        esriRestService.fullExtent.xmin,
        esriRestService.fullExtent.ymin,
        esriRestService.fullExtent.xmax,
        esriRestService.fullExtent.ymax,
      ]);
      rbiStyle.sprite = vts + "/resources/sprites/sprite";
      rbiStyle.glyphs = vts + "/resources/fonts/{fontstack}/{range}.pbf";
      rbiStyle.sources.esri = {
        type: "vector",
        tiles: esriRestService.tiles.map((el) => vts + "/" + el),
        bounds: boundsLonLat,
      };
    } catch (error) {
      rbiStyle = { version: 8, sources: {}, layers: [] };
      handleSetSnack("Gagal menghubungi RBI server", "error");
    }

    rbiStyle.sources.arcgisbasemap = {
      type: "raster",
      tiles: [
        "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      ],
      tileSize: 256,
    };
    rbiStyle.layers.unshift({
      id: "arcgisbasemap-topo",
      type: "raster",
      source: "arcgisbasemap",
    });
    return rbiStyle;
  }, []);

  const [
    activeMenu,
    activeCardFeature,
    activeSideFeature,
    expandSideNav,
    isOpenSideNav,
    setOpenSideNav,
    setActiveCardFeature,
  ] = useNav(
    (state) => [
      state.activeMenu,
      state.activeCardFeature,
      state.activeSideFeature,
      state.expandSideNav,
      state.isOpenSideNav,
      state.setOpenSideNav,
      state.setActiveCardFeature,
    ],
    shallow
  );

  useEffect(async () => {
    // setLoading(true);
    mapRef.current = new maplibregl.Map({
      container: mapElementRef.current,
      // style: "/styles-rupabumi.json",
      style: await fetchRBIStyle(),
      // https://api.maptiler.com/maps/topo/style.json?key=D7JUUxLv3oK21JM9jscD
      center: [116.9213, -0.7893],
      zoom: 4,
      maxZoom: 20,
      minZoom: 3,
    });

    // mapRef.current.addControl(
    //   new maplibregl.NavigationControl({ showCompass: false }),
    //   "bottom-right"
    // );

    // mapRef.current.addControl(
    //   new maplibregl.NavigationControl({ showZoom: false }),
    //   "bottom-left"
    // );

    // mapRef.current.addControl(
    //   new maplibregl.ScaleControl({
    //     maxWidth: 80,
    //     unit: "metric",
    //   }),
    //   "bottom-left"
    // );

    // mapRef.current.addControl(
    //   new maplibregl.ScaleControl({
    //     maxWidth: 80,
    //     unit: "imperial",
    //   }),
    //   "bottom-left"
    // );

    // let geoLocate = new maplibregl.GeolocateControl({
    //   // positionOptions: {
    //   //   enableHighAccuracy: true,
    //   // },
    //   // trackUserLocation: true,
    //   // fitBoundsOptions: { linear: true, maxZoom: 12 },
    //   showAccuracyCircle: false,
    // });

    // mapRef.current.addControl(geoLocate, "bottom-right");

    mapRef.current.on("load", () => {
      setMapLoad(true);
      // setLoading(false);
    });

    drawRef.current = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: false,
        trash: false,
      },
    });
    mapRef.current.addControl(drawRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    let selectedArr = toggledRow.map((el) => parseInt(el.id));
    mapRef.current &&
      mapRef.current.getLayer(titikPulauMvt) &&
      mapRef.current.setLayoutProperty(
        titikPulauMvt,
        "icon-image",
        isSelectAll
          ? activeFilter.length > 0
            ? [
                "case",
                ["in", ["id"], ["literal", selectedArr]],
                "marker-pulau-highlight",
                "marker-pulau",
              ]
            : [
                "case",
                ["in", ["id"], ["literal", selectedArr]],
                "marker-pulau",
                "marker-pulau-highlight",
              ]
          : [
              "case",
              ["in", ["id"], ["literal", selectedArr]],
              "marker-pulau-highlight",
              "marker-pulau",
            ]
      );
  }, [toggledRow, isSelectAll, activeFilter]);

  const handleZoomExtend = useCallback(() => {
    setDataTable([]);
    setPage(1);
    setBbox({
      xmin: mapRef.current.getBounds().getWest(),
      ymin: mapRef.current.getBounds().getSouth(),
      xmax: mapRef.current.getBounds().getEast(),
      ymax: mapRef.current.getBounds().getNorth(),
    });
  }, []);

  useEffect(() => {
    bbox && mapRef.current && mapRef.current.on("moveend", handleZoomExtend);
    return () => {
      mapRef.current.off("moveend", handleZoomExtend);
    };
  }, [bbox, mapRef.current]);

  const handleViewTable = () => {
    setOpenBottomDrawer((prev) => !prev);
    isOpenMapToolbox && setOpenMapToolbox(false);
    isExpandBottomDrawer && setOpenLegend(false);
  };

  // const sideNavPadding = {
  //   "left-[22.75rem]": Boolean(activeSideFeature) && isOpenSideNav,
  //   "left-[18.75rem]": Boolean(activeSideFeature) && !isOpenSideNav,
  //   "left-[15rem]":
  //     expandSideNav && isOpenSideNav && !Boolean(activeSideFeature),
  //   "left-[4.75rem]":
  //     !expandSideNav && isOpenSideNav && !Boolean(activeSideFeature),
  //   "left-4": !isOpenSideNav && !Boolean(activeSideFeature),
  // };

  const activeLayerRef = useRef(null);

  useEffect(() => {
    activeLayerRef.current = activeLayer;
  }, [activeLayer]);

  const addUploadedLayer = async () => {
    const indexedDB =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB ||
      window.shimIndexedDB;
    const request = await indexedDB.open(UploadLayerDatabase, 1);
    request.onerror = (event) => {
      console.log("IndexedDb error");
    };

    request.onupgradeneeded = (event) => {
      let db = event.target.result;
      setDb(db);
      db.createObjectStore(UploadLayerStore);
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      setDb(db);

      const txn = db.transaction(UploadLayerStore, "readonly");
      const store = txn.objectStore(UploadLayerStore);

      let query = store.getAll();
      query.onsuccess = (event) => {
        if (!event.target.result) {
          console.log(`data not found`);
        } else {
          if (event.target.result) {
            setActiveLayer([...event.target.result, ...activeLayerRef.current]);
          }
        }
      };
    };
  };

  const addDefaultLayer = useCallback(async () => {
    try {
      const response = await fetch("/api/additional-layers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (response.status === 200) {
        let additionalLayer = [];
        for (const element of result) {
          let obj = {};
          obj.source = "additional";
          obj.judul = element.layer_name;
          obj.nama = element.layer_id;
          obj.simpul = "Default Layer";
          obj.data = element.layer_defs;
          obj.visibility = "visible";
          additionalLayer.push(obj);
        }
        setActiveLayer([...additionalLayer, ...activeLayerRef.current]);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  }, []);

  useEffect(() => {
    setActiveLayer([
      {
        source: "toponim",
        judul: "Toponim_Pulau",
        nama: "",
        url: "",
        format: "mvt",
        simpul: "POI",
        bbox: "",
        srs: "",
        visibility: "visible",
      },
    ]);
    addDefaultLayer();
    addUploadedLayer();
  }, []);

  return (
    <>
      <Head>
        <title>SIPULAU - BIG</title>
        <link
          href='https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.css'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.1.1/mapbox-gl-draw.css'
          type='text/css'
        />
      </Head>
      <Script
        data-website-id='ad644dc6-3c28-4089-98b6-036414106943'
        data-do-not-track='true'
        src={process.env.NEXT_PUBLIC_UMAMI_URL + "/umami.js"}
      />
      {/* <Layout> */}
      <div className='min-h-screen flex items-center justify-center'>
        <div
          ref={mapElementRef}
          // style={{
          //   visibility: mapload ? "inherit" : "hidden",
          // }}
          className='w-full h-screen relative'
        ></div>
        <MapProvider
          value={{
            draw: drawRef.current,
            map: mapRef.current,
            merc: mercRef.current,
            isOpenDrawer,
            setIsOpenDrawer,
            activeFeature,
            setActiveFeature,
            isOpenFeature,
            setIsOpenFeature,
            toggleMapFilter,
            fetchRBIStyle,
            activeFilter,
            setActiveFilter,
            queryFilter,
            setQueryFilter,
            setFilterArr,
            filterArr,
            setColumn,
            column,
            columnObj,
            refreshLayer,
            setRefreshLayer,
            bbox,
            setBbox,
            handleZoomExtend,
            // activeLegend,
            // setActiveLegend,
            drawPoly,
            setDrawPoly,
          }}
        >
          {mapRef.current ? null : (
            <div className='absolute bottom-0 z-50 w-full bg-gray-200 rounded'>
              <div className='absolute w-full top-0 h-screen rounded shim-red'></div>
            </div>
          )}

          <TopNav />
          <SideNav handleViewTable={handleViewTable} />

          {/* bottom left map controller */}
          <div
            className={clsx([
              "absolute bottom-10 right-3 z-10 flex flex-col gap-0 transition-all duration-100 ease-in-out",
              { "bottom-[27.5rem]": isOpenBottomDrawer },
            ])}
          >
            <GeolocateController map={mapRef.current} />
            <ZoomInController map={mapRef.current} />
            <ZoomOutController map={mapRef.current} />
            {Boolean(activeMenu) ? (
              <MapToolbox
                isOpen={isOpenMapToolbox}
                isOpenBottomDrawer={isOpenBottomDrawer}
                setOpenMapToolbox={() => {
                  setOpenMapToolbox((prev) => !prev);
                }}
              />
            ) : null}
            <MapToolboxCard
              isOpen={Boolean(activeCardFeature)}
              onClose={() => {
                setActiveCardFeature(null);
              }}
            />
          </div>
          {/* bottom left map controller */}

          {/* top right map controller */}
          {activeLegend.length > 0 && (
            <Legend
              isOpen={isOpenLegend}
              setOpen={() => {
                setOpenLegend((prev) => !prev);
                isExpandBottomDrawer && setExpandBottomDrawer(false);
              }}
            />
          )}
          {/* top right map controller */}

          {/* bottom left map feature */}
          {mapload && <MapTrackPointer map={mapRef.current} />}
          {/* bottom left map feature */}

          {/* bottom drawer table */}
          <div className='absolute bottom-0 z-20 w-screen'>
            <BottomDrawer
              isOpen={isOpenBottomDrawer}
              isOpenNav={isOpenSideNav}
              isExpandNav={expandSideNav}
              isExpandBottomDrawer={isExpandBottomDrawer}
              isActiveSideFeature={Boolean(activeSideFeature)}
            >
              <MapTable
                dataTable={dataTable}
                setDataTable={setDataTable}
                toggledRow={toggledRow}
                setToggledRow={setToggledRow}
                page={page}
                setPage={setPage}
                isSelectAll={isSelectAll}
                setIsSelectAll={setIsSelectAll}
                setOpenBottomDrawer={setOpenBottomDrawer}
                setExpandBottomDrawer={() => {
                  setExpandBottomDrawer((prev) => !prev);
                  !isExpandBottomDrawer && isOpenLegend && setOpenLegend(false);
                }}
              />
            </BottomDrawer>
          </div>
          {/* bottom drawer table */}
          {/* <ResizeableDrawer isOpen={isOpenDrawer}>
              <MapTable
                dataTable={dataTable}
                setDataTable={setDataTable}
                toggledRow={toggledRow}
                setToggledRow={setToggledRow}
                page={page}
                setPage={setPage}
                isSelectAll={isSelectAll}
                setIsSelectAll={setIsSelectAll}
              />
            </ResizeableDrawer> */}

          {mapload && activeLayer.length > 0 && (
            <MapLayers isSelectAll={isSelectAll} />
          )}
          {/* {mapload && <MvtLayer isSelectAll={isSelectAll} />} */}
          <Modal
            isShowing={isOpenMapFilter}
            handleModal={toggleMapFilter}
            size='lg'
          >
            <Filter
              setToggledRow={setToggledRow}
              toggleMapFilter={toggleMapFilter}
              setDataTable={setDataTable}
              setPage={setPage}
            />
          </Modal>
        </MapProvider>
      </div>
      {/* </Layout> */}
      <style jsx>
        {`
          .shim-red {
            position: relative;
            overflow: hidden;
            background-color: rgba(255, 255, 255);
          }
          .shim-red::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            background-image: linear-gradient(
              90deg,
              rgba(116, 123, 133, 0.3) 0,
              rgba(116, 123, 133, 0.2) 50%,
              rgba(116, 123, 133, 0.1) 100%
            );
            animation: shimmer 1.5s ease-out infinite;
            content: "";
          }

          @keyframes shimmer {
            100% {
              transform: translateX(0%);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default map;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "attributetable",
        "komentar",
        "simpulJaringan",
        "sideBarRight",
        "popupPulau",
        "footer",
      ])),
      // Will be passed to the page component as props
    },
  };
}
