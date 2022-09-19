import React, { useEffect, useContext, useRef, useState } from "react";
import maplibregl from "maplibre-gl";

import MapContext from "../../context/MapContext";

const SimpulLayer = ({ item }) => {
  const { map, refreshLayer, drawPoly } = useContext(MapContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const popRef = useRef(null);
  const contentRef = useRef(null);

  const getPopupSimpul = async (e) => {
    setPage(1);
    const link = new URL(item.url);
    const mapExtend = map.getBounds();
    if (item.format === "WMS") {
      link.search = `?service=wfs&version=2.0.0&request=GetFeature&typeNames=${item.nama}&bbox=${e.lngLat.lng},${e.lngLat.lat},${e.lngLat.lng},${e.lngLat.lat},EPSG:4326&outputFormat=application/json`;
      const res = await fetch(
        link.protocol === "http:"
          ? "/api/proxy?proxy=" + encodeURIComponent(link.href)
          : link.href
      );
      const resData = await res.json();
      setData(resData.features);

      if (window.innerWidth >= 768 && resData.features.length > 0) {
        popRef.current = new maplibregl.Popup({ closeButton: false })
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .setDOMContent(contentRef.current)
          .setMaxWidth("450px")
          .addTo(map);
      }
    } else {
      link.pathname += "/identify";
      link.search = `?f=json&returnFieldName=true&returnGeometry=false&returnUnformattedValues=false&returnZ=false&tolerance=3&imageDisplay=400%2C400%2C96&geometry=%7B%22x%22%3A${e.lngLat.lng}%2C%22y%22%3A${e.lngLat.lat}%7D&geometryType=esriGeometryPoint&mapExtent=${mapExtend._sw.lng}%2C${mapExtend._sw.lat}%2C${mapExtend._ne.lng}%2C${mapExtend._ne.lat}&layers=top`;
      const res = await fetch(
        link.protocol === "http:"
          ? "/api/proxy?proxy=" + encodeURIComponent(link.href)
          : link.href
      );
      const resData = await res.json();
      setData(resData.results);

      if (window.innerWidth >= 768 && resData.results.length > 0) {
        popRef.current = new maplibregl.Popup({ closeButton: false })
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .setDOMContent(contentRef.current)
          .setMaxWidth("450px")
          .addTo(map);
      }
    }
  };

  useEffect(() => {
    if (!drawPoly) {
      map.on("click", getPopupSimpul);
    }
    return () => {
      if (window.location.pathname === "/map" && !drawPoly) {
        map.off("click", getPopupSimpul);
      }
    };
  }, [item, refreshLayer, drawPoly]);

  useEffect(() => {
    const link = new URL(item.url);
    if (item.format === "WMS") {
      link.search =
        "?width=256&height=256&bbox={bbox-epsg-3857}&format=image%2Fpng&request=GetMap&service=WMS&styles=&transparent=true&version=1.3.0&crs=EPSG%3A3857&layers=" +
        item.nama;
    } else {
      link.pathname += "/export";
      link.search =
        "?bbox={bbox-epsg-3857}&bboxSR=3857&size=256,256&format=png&transparent=true&f=image";
    }

    if (!map.getSource(item.judul + item.nama)) {
      map.addSource(item.judul + item.nama, {
        type: "raster",
        tiles: [
          link.protocol === "http:"
            ? "/api/proxy?proxy=" +
              encodeURIComponent(link.href).replace(
                "%7Bbbox-epsg-3857%7D",
                "{bbox-epsg-3857}"
              )
            : link.href,
        ],
        tileSize: 256,
        bounds:
          item.bbox !== "0,0,0,0"
            ? item.bbox.split(",").map((el) => parseFloat(el))
            : [94.75, -11.029999999999998, 141.01, 5.870000000000001],
      });
      map.addLayer({
        id: item.judul + item.nama,
        type: "raster",
        source: item.judul + item.nama,
        paint: { "raster-opacity": 1 },
        layout: { visibility: "visible" },
      });
    }

    return () => {
      if (window.location.pathname === "/map") {
        map.getLayer(item.judul + item.nama) &&
          map.removeLayer(item.judul + item.nama);
        map.getSource(item.judul + item.nama) &&
          map.removeSource(item.judul + item.nama);
      }
    };
  }, [item, refreshLayer]);

  return (
    <div style={{ display: popRef.current ? "block" : "none" }}>
      <div ref={contentRef} className='p-2 rounded-lg flex flex-col gap-3 w-72'>
        <div className='flex px-4'>
          <p className='flex-1 text-center text-black-2 tracking-wide font-semibold'>
            {data.length > 0 &&
              (item.format === "WMS" ? item.simpul : data[page - 1].layerName)}
          </p>
          <button
            onClick={() => {
              popRef.current.remove();
            }}
          >
            <img src='/images/ic-close.svg' alt='close button' />
          </button>
        </div>
        <table className='w-full'>
          <tbody>
            {data.length > 0 &&
              (item.format === "WMS"
                ? Object.entries(data[page - 1].properties).map((el, index) => (
                    <tr
                      className={`${index % 2 === 0 ? "bg-blue-3" : ""}`}
                      key={index}
                    >
                      <td className='w-1/2 border-r-2 px-2 text-black-2'>
                        {el[0]}
                      </td>
                      <td className='w-1/2 px-2 text-black-2'>{el[1]}</td>
                    </tr>
                  ))
                : Object.entries(data[page - 1].attributes).map((el, index) => (
                    <tr
                      className={`${index % 2 === 0 ? "bg-blue-3" : ""}`}
                      key={index}
                    >
                      <td className='w-1/2 border-r-2 px-2 text-black-2'>
                        {el[0]}
                      </td>
                      <td className='w-1/2 px-2 text-black-2'>{el[1]}</td>
                    </tr>
                  )))}
          </tbody>
        </table>
        {data.length > 0 ? (
          <div className='flex justify-end items-center gap-2'>
            <button
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page === 1}
            >
              <img
                src='/images/ic-arrow-r.svg'
                alt='previous button'
                className='transform rotate-180'
              />
            </button>
            <p className='text-black-2'>
              {page} of {data.length}
            </p>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={page === data.length}
            >
              <img src='/images/ic-arrow-r.svg' alt='previous button' />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SimpulLayer;
