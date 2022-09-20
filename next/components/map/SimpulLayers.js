import React from "react";
import { useNetwork } from "../../hooks";
import AdditionalLayer from "./AdditionalLayer";
import SimpulLayer from "./SimpulLayer";
import UploadLayer from "./UploadLayer";

const SimpulLayers = () => {
  const activeLayer = useNetwork((state) => state.activeLayer);

  return activeLayer.map((el) => {
    if (el.source === "simpul") {
      return <SimpulLayer item={el} key={el.judul + el.nama} />;
    } else if (el.source === "upload") {
      return <UploadLayer item={el} key={el.judul + el.nama} />;
    } else if (el.source === "additional") {
      return <AdditionalLayer item={el} key={el.judul + el.nama} />;
    }
  });
};

export default SimpulLayers;
