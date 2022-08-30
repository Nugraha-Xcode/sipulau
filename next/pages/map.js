import { useRef, useState, useEffect, useCallback, useContext } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import shallow from "zustand/shallow";
import clsx from "clsx";
import Tippy from "@tippyjs/react";
import Head from "next/head";
import Script from "next/script";
import maplibregl from "maplibre-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import SphericalMercator from "@mapbox/sphericalmercator";

import useToggle from "../utils/useToggle";
import { MapProvider } from "../context/MapContext";
import Layout from "../components/Layout";
import MapSearch from "../components/map/MapSearch";
import MapFeature from "../components/map/MapFeature";
import MapLegend from "../components/map/MapLegend";
import MapTable from "../components/map/MapTable";
import Modal from "../components/modal";
import MvtLayer from "../components/map/MvtLayer";
import ResizeableDrawer from "../components/core/ResizeableDrawer";
import Filter from "../components/map/Filter";
import SimpulLayer from "../components/map/SimpulLayer";
import AppContext from "../context/AppContext";
import SimpulLayers from "../components/map/SimpulLayers";
import SideNav from "../components/sideNav/SideNav";
import { useNav } from "../hooks";
import MapToolbox from "../components/map/MapToolbox";
import MapToolboxCard from "../components/map/MapToolboxCard";
import BottomDrawer from "../components/core/BottomDrawer";

const map = () => {
  const { t } = useTranslation("attributetable");
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
  const [filterArr, setFilterArr] = useState([
    // {
    //   id: (Math.random() * 10000).toFixed(0),
    //   selectObj: { value: "nammap", label: "Nama Pulau" },
    // },
  ]);
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
  const [activeLegend, setActiveLegend] = useState([]);
  const [activeLayer, setActiveLayer] = useState([]);
  const [drawPoly, setDrawPoly] = useState(false);

  const mercRef = useRef(new SphericalMercator());

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
      mapRef.current.getLayer("titikPulauMvt") &&
      mapRef.current.setLayoutProperty(
        "titikPulauMvt",
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
            activeLegend,
            setActiveLegend,
            activeLayer,
            setActiveLayer,
            drawPoly,
            setDrawPoly,
          }}
        >
          {mapRef.current ? null : (
            <div className='absolute bottom-0 z-50 w-full bg-gray-200 rounded'>
              <div className='absolute w-full top-0 h-screen rounded shim-red'></div>
            </div>
          )}

          {mapload && <MvtLayer isSelectAll={isSelectAll} />}
          <SideNav handleViewTable={handleViewTable} />

          {/* bottom left map controller */}
          <div
            className={clsx([
              "absolute bottom-6 z-10 flex transition-all duration-100 ease-in-out",
              {
                "left-[31.8rem]": Boolean(activeSideFeature) && isOpenSideNav,
                "left-[25.6rem]": Boolean(activeSideFeature) && !isOpenSideNav,
                "left-[17.25rem]":
                  expandSideNav && isOpenSideNav && !Boolean(activeSideFeature),
                "left-[7.25rem]":
                  !expandSideNav &&
                  isOpenSideNav &&
                  !Boolean(activeSideFeature),
                "left-4": !isOpenSideNav && !Boolean(activeSideFeature),
                "bottom-[27.5rem]": isOpenBottomDrawer,
              },
            ])}
          >
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

          {/* top left map controller */}
          <div
            className={clsx([
              "absolute top-6 z-10 transition-all duration-100 ease-in-out",
              {
                "left-[31.8rem]": Boolean(activeSideFeature) && isOpenSideNav,
                "left-[25.6rem]": Boolean(activeSideFeature) && !isOpenSideNav,
                "left-[17.25rem]":
                  expandSideNav && isOpenSideNav && !Boolean(activeSideFeature),
                "left-[7.25rem]":
                  !expandSideNav &&
                  isOpenSideNav &&
                  !Boolean(activeSideFeature),
                "left-4": !isOpenSideNav && !Boolean(activeSideFeature),
              },
            ])}
          >
            <Tippy
              content={isOpenSideNav ? "Hide Sidebar" : "Open Sidebar"}
              placement='right'
              delay={300}
            >
              <button
                onClick={() => {
                  setOpenSideNav(!isOpenSideNav);
                }}
                className='z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white hover:text-brand-400'
              >
                <img src='/images/ic-tab.svg' alt='Menu Toggle' />
              </button>
            </Tippy>
          </div>
          {/* top left map controller */}

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

          {/* <MapSearch
              category={category}
              setCategory={(category) => {
                setCategory(category);
              }}
            /> */}
          {/* <MapFeature /> */}
          {/* <div
              data-cy="attribute-table-drawer-button"
              onClick={() => {
                setIsOpenDrawer(true);
                setIsOpenFeature(false);
                setActiveFeature("search");
              }}
              className="font-map absolute bottom-6 left-1/2 z-10 shadow-map-1 rounded-md p-1 hidden md:flex flex-col gap-1 bg-main-blue transform -translate-x-1/2 cursor-pointer"
            >
              <div className="flex gap-2 px-5 py-3 ">
                <img
                  src="/images/ic-table.svg"
                  alt="legend icon"
                  className="w-5"
                />
                <p className="text-sm font-semibold text-white">
                  {t("buttonAttribute")}
                </p>
              </div>
            </div> */}
          {/* <div
              onClick={() =>
                mapRef.current.flyTo({
                  center: [116.9213, -0.7893],
                  zoom: 4,
                })
              }
              className='absolute bottom-[4.25rem] md:bottom-[5.5rem] mb-[6px] left-[27px] md:left-8 z-10 bg-white ring-2 ring-main-gray ring-opacity-30 rounded-md p-1.5 md:p-2.5 cursor-pointer'
            >
              <img
                src='/images/ic-reset-zoom.svg'
                alt='extend default button'
                className='w-5'
              />
            </div> */}
          {/* <a
              href={`/files/${t("userGuide")}.pdf`}
              target='_blank'
              className='absolute bottom-44 md:bottom-56 mb-[6px] right-[10px] md:right-6 z-10 bg-white ring-2 ring-main-gray ring-opacity-30 rounded-md p-1.5 md:p-2.5 cursor-pointer'
            >
              <img
                src='/images/ic-question.svg'
                alt='guide button'
                className='w-5'
              />
            </a> */}
          {/* <MapLegend /> */}
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

          {/* {mapload && activeLayer.length > 0 && <SimpulLayers />} */}
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
