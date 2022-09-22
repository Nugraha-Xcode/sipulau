import { useContext, useEffect } from "react";
import MapContext from "../../context/MapContext";
import Popup from "./popup/Popup";

const MvtLayer = ({ item, isSelectAll }) => {
  const { map, refreshLayer } = useContext(MapContext);
  useEffect(() => {
    let origin = window.location.origin;
    if (!map.getSource(item.judul + item.nama)) {
      map.addSource(item.judul + item.nama, {
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
        id: item.judul + item.nama,
        type: "symbol",
        source: item.judul + item.nama,
        "source-layer": "titik-pulau",
        paint: { "icon-opacity": 1 },
        layout: {
          visibility: item.visibility,
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
        map.getLayer(item.judul + item.nama) &&
          map.removeLayer(item.judul + item.nama);
        map.getSource(item.judul + item.nama) &&
          map.removeSource(item.judul + item.nama);
      }
    };
  }, [refreshLayer, isSelectAll]);

  return <Popup layername={item.judul + item.nama} />;
};

export default MvtLayer;
