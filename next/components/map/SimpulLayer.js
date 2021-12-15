import React, { useEffect, useContext } from "react";

import MapContext from "../../context/MapContext";

const SimpulLayer = () => {
  const { map, activeLayer, refreshLayer } = useContext(MapContext);
  useEffect(() => {
    if (activeLayer.length > 0) {
      activeLayer.forEach((el) => {
        el.layer.forEach((item) => {
          if (!map.getSource(item.judul + item.nama)) {
            map.addSource(item.judul + item.nama, {
              type: "raster",
              tiles:
                item.format === "WMS"
                  ? [
                      item.url +
                        "width=256&height=256&bbox={bbox-epsg-3857}&format=image%2Fpng&request=GetMap&service=WMS&styles=&transparent=true&version=1.3.0&crs=EPSG%3A3857&layers=" +
                        item.nama,
                    ]
                  : [
                      item.url +
                        "/export?bbox={bbox-epsg-3857}&bboxSR=3857&size=256,256&format=png&transparent=true&f=image",
                    ],
              tileSize: 256,
              bounds:
                item.bbox !== "0,0,0,0"
                  ? item.bbox.split(",").map((el) => parseFloat(el))
                  : [94.75, -11.029999999999998, 141.01, 5.870000000000001],
            });
            map.addLayer(
              {
                id: item.judul + item.nama,
                type: "raster",
                source: item.judul + item.nama,
                paint: { "raster-opacity": 1 },
                layout: { visibility: "visible" },
              },
              "titikPulauMvt"
            );
          }
        });
      });
    }
    return () => {
      if (window.location.pathname === "/map") {
        activeLayer.forEach((el) => {
          el.layer.forEach((item) => {
            map.getLayer(item.judul + item.nama) &&
              map.removeLayer(item.judul + item.nama);
            map.getSource(item.judul + item.nama) &&
              map.removeSource(item.judul + item.nama);
          });
        });
      }
    };
  }, [activeLayer, refreshLayer]);
  return <></>;
};

export default SimpulLayer;
