import React, { useContext, useEffect } from "react";
import MapContext from "../../context/MapContext";

const AdditionalLayer = ({ item }) => {
  const { map, refreshLayer } = useContext(MapContext);
  useEffect(() => {
    const link = new URL(item.data[0].url);

    link.pathname += "/export";
    link.search =
      "?bbox={bbox-epsg-3857}&bboxSR=3857&size=256,256&format=png&transparent=true&f=image";

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
      });
      map.addLayer({
        id: item.judul + item.nama,
        // maxzoom: item.data[0].max_zoom,
        // minzoom: item.data[0].min_zoom,
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
  return <></>;
};

export default AdditionalLayer;
