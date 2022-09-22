import { useContext, useEffect } from "react";
import MapContext from "../../context/MapContext";

const UploadLayer = ({ item }) => {
  const { map, refreshLayer } = useContext(MapContext);
  useEffect(() => {
    if (!map.getSource(item.judul + item.nama)) {
      map.addSource(item.judul + item.nama, {
        type: "geojson",
        data: item.data,
      });

      if (
        item.data.features[0].geometry.type === "Point" ||
        item.data.features[0].geometry.type === "MultiPoint"
      ) {
        map.addLayer({
          id: item.judul + item.nama,
          type: "circle",
          source: item.judul + item.nama,
          layout: { visibility: item.visibility },
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
          layout: { visibility: item.visibility },
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
    }

    return () => {
      if (window.location.pathname === "/map") {
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
