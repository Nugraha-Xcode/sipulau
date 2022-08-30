import React from "react";
import { useNetwork } from "../../hooks";
import SimpulLayer from "./SimpulLayer";

const SimpulLayers = () => {
  const activeLayer = useNetwork((state) => state.activeLayer);
  console.log(activeLayer);

  return activeLayer.map((el) => (
    <SimpulLayer item={el} key={el.judul + el.nama} />
  ));
};

export default SimpulLayers;
