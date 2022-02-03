import React, { useContext } from "react";

import MapContext from "../../context/MapContext";
import SimpulLayer from "./SimpulLayer";

const SimpulLayers = () => {
  const { activeLayer } = useContext(MapContext);

  return activeLayer.map((el) =>
    el.layer.map((item) => (
      <SimpulLayer item={item} key={item.judul + item.nama} />
    ))
  );
};

export default SimpulLayers;
