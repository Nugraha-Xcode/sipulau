import React from "react";
import { useNetwork } from "../../hooks";
import SimpulLayer from "./SimpulLayer";
import UploadLayer from "./UploadLayer";

const SimpulLayers = () => {
  const activeLayer = useNetwork((state) => state.activeLayer);

  return activeLayer.map((el) => {
    if (el.source === "simpul") {
      return <SimpulLayer item={el} key={el.judul + el.nama} />;
    } else if (el.source === "upload") {
      return <UploadLayer item={el} key={el.judul} />;
    }
  });
};

export default SimpulLayers;
