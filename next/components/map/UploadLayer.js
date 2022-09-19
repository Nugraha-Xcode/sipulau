import { useContext, useEffect } from "react";
import { titikPulauMvt } from "../../constant";
import MapContext from "../../context/MapContext";
import { getRandomHex } from "../../utils/getRandomHex";
import Popup from "./popup/Popup";

const UploadLayer = ({ item }) => {
  const { map, refreshLayer } = useContext(MapContext);
  useEffect(() => {
    if (!map.getSource(item.judul)) {
      map.addSource(item.judul, {
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

      map.addLayer({
        id: item.judul,
        type: "line",
        source: item.judul,
        paint: {
          "line-color": "#" + getRandomHex,
          "line-width": 2,
          "line-opacity": 1,
        },
      });

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
        map.getLayer(item.judul) && map.removeLayer(item.judul);
        map.getSource(item.judul) && map.removeSource(item.judul);
      }
    };
  }, [refreshLayer]);

  return <></>;
};

export default UploadLayer;
