import { useContext, useEffect } from "react";
import { titikPulauMvt } from "../../constant";
import MapContext from "../../context/MapContext";
import { getRandomHex } from "../../utils/getRandomHex";
import Popup from "./popup/Popup";

const UploadLayer = ({ item }) => {
  const { map, refreshLayer } = useContext(MapContext);
  useEffect(() => {
    if (!map.getSource(item.judul + item.nama)) {
      map.addSource(item.judul + item.nama, {
        type: "geojson",
        data: item.data,
      });

      // map.loadImage("/images/marker.png", function (error, image) {
      //   if (error) throw error;
      //   map.addImage("marker-pulau", image);
      // });

      // map.loadImage("/images/marker-selected.png", function (error, image) {
      //   if (error) throw error;
      //   map.addImage("marker-pulau-highlight", image);
      // });

      if (
        item.data.features[0].geometry.type === "Point" ||
        item.data.features[0].geometry.type === "MultiPoint"
      ) {
        map.addLayer({
          id: item.judul + item.nama,
          type: "circle",
          source: item.judul + item.nama,
          layout: { visibility: "visible" },
          paint: {
            "circle-radius": 6,
            "circle-color":
              "#" + Math.floor(Math.random() * 16777215).toString(16),
            "circle-opacity": 1,
          },
          filter: ["==", "$type", "Point"],
        });
      } else {
        map.addLayer({
          id: item.judul + item.nama,
          type: "line",
          source: item.judul + item.nama,
          layout: { visibility: "visible" },
          paint: {
            "line-color":
              "#" + Math.floor(Math.random() * 16777215).toString(16),
            "line-width": 2,
            "line-opacity": 1,
          },
          filter: [
            "any",
            ["==", "$type", "Polygon"],
            ["==", "$type", "LineString"],
          ],
        });
      }

      // map.addLayer({
      //   id: titikPulauMvt,
      //   type: "symbol",
      //   source: titikPulauMvt,
      //   "source-layer": "titik-pulau",
      //   layout: {
      //     visibility: "visible",
      //     "icon-image": isSelectAll
      //       ? [
      //           "case",
      //           ["in", ["id"], ""],
      //           "marker-pulau",
      //           "marker-pulau-highlight",
      //         ]
      //       : [
      //           "case",
      //           ["in", ["id"], ""],
      //           "marker-pulau-highlight",
      //           "marker-pulau",
      //         ],
      //     "icon-size": 0.3,
      //   },
      // });
    }

    return () => {
      if (window.location.pathname === "/map") {
        // map.hasImage("marker-pulau") && map.removeImage("marker-pulau");
        // map.hasImage("marker-pulau-highlight") &&
        //   map.removeImage("marker-pulau-highlight");
        map.getLayer(item.judul + item.nama) &&
          map.removeLayer(item.judul + item.nama);
        map.getSource(item.judul + item.nama) &&
          map.removeSource(item.judul + item.nama);
      }
    };
  }, [refreshLayer]);

  return <></>;
};

export default UploadLayer;
