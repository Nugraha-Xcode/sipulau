import React from "react";
import { useNetwork } from "../../hooks";
import AdditionalLayer from "./AdditionalLayer";
import MvtLayer from "./MvtLayer";
import SimpulLayer from "./SimpulLayer";
import UploadLayer from "./UploadLayer";

const SimpulLayers = ({ isSelectAll }) => {
  const activeLayer = useNetwork((state) => state.activeLayer);

  return activeLayer.map((el) => {
    if (el.source === "toponim") {
      return (
        <MvtLayer
          item={el}
          isSelectAll={isSelectAll}
          key={el.judul + el.nama}
        />
      );
    } else if (el.source === "simpul") {
      return <SimpulLayer item={el} key={el.judul + el.nama} />;
    } else if (el.source === "upload") {
      return <UploadLayer item={el} key={el.judul + el.nama} />;
    } else if (el.source === "additional") {
      return <AdditionalLayer item={el} key={el.judul + el.nama} />;
    }
  });
};

export default SimpulLayers;
