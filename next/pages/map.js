import { useRef, useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Script from "next/script";
import maplibregl from "maplibre-gl";

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

const columnObj = [
  { label: "Arti Nama", value: "artinam" },
  { label: "Asal Bahasa", value: "aslbhs" },
  { label: "Kode Pulau", value: "id_toponim" },
  { label: "Kode Wilayah", value: "id_wilayah" },
  { label: "Lokasi", value: "location" },
  { label: "Nama Pulau", value: "nammap" },
  { label: "Remark", value: "remark" },
  { label: "Sejarah Nama", value: "sjhnam" },
  { label: "Status", value: "status" },
];

const map = () => {
  const mapRef = useRef(null);
  const drawRef = useRef(null);
  const mapElementRef = useRef(null);
  const [isOpenMapFilter, toggleMapFilter] = useToggle();
  const [mapload, setMapLoad] = useState(false);
  const [activeFeature, setActiveFeature] = useState("");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isOpenFeature, setIsOpenFeature] = useState(false);
  const [category, setCategory] = useState("");
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
  const [page, setPage] = useState(1);
  const [column, setColumn] = useState(columnObj);
  const [refreshLayer, setRefreshLayer] = useState(false);
  const [bbox, setBbox] = useState(null);

  const fetchRBIStyle = useCallback(async () => {
    let vts =
      "https://geoservices.big.go.id/rbi/rest/services/Hosted/Rupabumi_Indonesia/VectorTileServer";
    let res = await fetch(vts + "/resources/styles/root.json");
    let rbiStyle = await res.json();
    rbiStyle.sprite = vts + "/resources/sprites/sprite";
    rbiStyle.glyphs = vts + "/resources/fonts/{fontstack}/{range}.pbf";
    rbiStyle.sources.esri = {
      type: "vector",
      tiles: [vts + "/tile/{z}/{y}/{x}.pbf"],
      bounds: [90, -13, 144, 8],
    };
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

  useEffect(async () => {
    // setLoading(true);
    mapRef.current = new maplibregl.Map({
      container: mapElementRef.current,
      // style: "/styles-rupabumi.json",
      style: await fetchRBIStyle(),
      // https://api.maptiler.com/maps/topo/style.json?key=D7JUUxLv3oK21JM9jscD
      center: [107.59563446044922, -6.934776792662195],
      zoom: 6,
      maxZoom: 20,
      minZoom: 3,
    });

    mapRef.current.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "bottom-right"
    );

    mapRef.current.addControl(
      new maplibregl.NavigationControl({ showZoom: false }),
      "bottom-left"
    );

    mapRef.current.addControl(
      new maplibregl.ScaleControl({
        maxWidth: 80,
        unit: "metric",
      }),
      "bottom-left"
    );

    mapRef.current.addControl(
      new maplibregl.ScaleControl({
        maxWidth: 80,
        unit: "imperial",
      }),
      "bottom-left"
    );

    let geoLocate = new maplibregl.GeolocateControl({
      // positionOptions: {
      //   enableHighAccuracy: true,
      // },
      // trackUserLocation: true,
      // fitBoundsOptions: { linear: true, maxZoom: 12 },
      showAccuracyCircle: false,
    });

    mapRef.current.addControl(geoLocate, "bottom-right");

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
      mapRef.current.setLayoutProperty(
        "titikPulauMvt",
        "icon-image",
        isSelectAll
          ? [
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
  }, [toggledRow, isSelectAll]);

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

  return (
    <>
      <Head>
        <title>SIPULAU - BIG</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.css'
          rel='stylesheet'
        />
        <script src='https://api.tiles.mapbox.com/mapbox.js/plugins/turf/v3.0.11/turf.min.js'></script>
        <script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.1.1/mapbox-gl-draw.js'></script>
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
      <Layout>
        <div className='min-h-screen flex items-center justify-center'>
          <div
            ref={mapElementRef}
            // style={{
            //   visibility: mapload ? "inherit" : "hidden",
            // }}
            className='w-full h-screen relative'
          >
            <MapProvider
              value={{
                draw: drawRef.current,
                map: mapRef.current,
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
              }}
            >
              <MapSearch
                category={category}
                setCategory={(category) => {
                  setCategory(category);
                }}
              />
              <MapFeature />
              <div
                onClick={() => {
                  setIsOpenDrawer(true);
                  setIsOpenFeature(false);
                  setActiveFeature("search");
                }}
                className=' absolute bottom-6 left-1/2 z-10 shadow-map-1 rounded-md p-1 hidden md:flex flex-col gap-1 bg-main-blue transform -translate-x-1/2 cursor-pointer'
              >
                <div className='flex gap-2 px-5 py-3 '>
                  <img
                    src='/images/ic-table.svg'
                    alt='legend icon'
                    className='w-5'
                  />
                  <p className='text-sm font-semibold text-white'>
                    Tabel data informasi-informasi dari Pulau
                  </p>
                </div>
              </div>
              <div className='absolute bottom-44 md:bottom-56 mb-[6px] right-[10px] md:right-6 z-10 bg-white ring-2 ring-main-gray ring-opacity-30 rounded-md p-1.5 md:p-2.5 cursor-pointer'>
                <img
                  src='/images/ic-question.svg'
                  alt='guide button'
                  className='w-5'
                />
              </div>
              <MapLegend />
              <ResizeableDrawer isOpen={isOpenDrawer}>
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
              </ResizeableDrawer>
              {mapload && <MvtLayer isSelectAll={isSelectAll} />}
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
        </div>
      </Layout>
    </>
  );
};

export default map;
