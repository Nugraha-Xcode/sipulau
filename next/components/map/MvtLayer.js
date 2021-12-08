import { useContext, useEffect } from "react";
import MapContext from "../../context/MapContext";
import Popup from "./popup/Popup";

const MvtLayer = ({ isSelectAll }) => {
  const { map, refreshLayer } = useContext(MapContext);
  useEffect(() => {
    let origin = window.location.origin;
    if (!map.getSource("titikPulauMvt")) {
      map.addSource("titikPulauMvt", {
        type: "vector",
        tiles: [origin + "/api/mvt/titik-pulau/{z}/{x}/{y}"],
      });

      map.loadImage("/images/marker.png", function (error, image) {
        if (error) throw error;
        map.addImage("marker-pulau", image);
      });

      map.loadImage("/images/marker-selected.png", function (error, image) {
        if (error) throw error;
        map.addImage("marker-pulau-highlight", image);
      });

      map.addLayer({
        id: "titikPulauMvt",
        type: "symbol",
        source: "titikPulauMvt",
        "source-layer": "titik-pulau",
        layout: {
          visibility: "visible",
          "icon-image": isSelectAll
            ? [
                "case",
                ["in", ["id"], ""],
                "marker-pulau",
                "marker-pulau-highlight",
              ]
            : [
                "case",
                ["in", ["id"], ""],
                "marker-pulau-highlight",
                "marker-pulau",
              ],
          "icon-size": 0.3,
        },
      });
    }

    return () => {
      if (window.location.pathname === "/map") {
        map.hasImage("marker-pulau") && map.removeImage("marker-pulau");
        map.hasImage("marker-pulau-highlight") &&
          map.removeImage("marker-pulau-highlight");
        map.getLayer("titikPulauMvt") && map.removeLayer("titikPulauMvt");
        map.getSource("titikPulauMvt") && map.removeSource("titikPulauMvt");
      }
    };
  }, [refreshLayer, isSelectAll]);

  return <Popup layername='titikPulauMvt' />;
};

export default MvtLayer;
