import { useContext, useEffect } from "react";
import shallow from "zustand/shallow";
import MapContext from "../../context/MapContext";
import { useTable } from "../../hooks";

const MvtLayer = ({ item }) => {
  const { map, refreshLayer } = useContext(MapContext);
  const [isSelectAll, filterId] = useTable(
    (state) => [state.isSelectAll, state.filterId],
    shallow
  );
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
          "icon-offset": [0, -41],
        },
        ...(filterId.length > 0 && {
          filter: ["in", ["id"], ["literal", filterId]],
        }),
        // filter: filterId.length > 0 && [("in", ["id"], ["literal", filterId])],
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
  }, [refreshLayer, isSelectAll, filterId]);

  return <></>;
};

export default MvtLayer;
