import React from "react";
import { Button, Dropdown } from "../../core";
import style from "./FileFormatDownload.module.css";

const FileFormatDownload = ({
  type,
  setType,
  handleDownloadCsv,
  handleDownloadShp,
}) => {
  // dropdown value
  const value = [
    { label: "CSV", value: "csv" },
    { label: "SHP", value: "shp" },
  ];

  return (
    <div className={style.container}>
      <Dropdown
        value={value}
        onValueSelected={(item) => setType(item)}
        valueSelected={type}
        gapOptions='25px'
        direction='up'
      />
      <button
        data-cy='download-feature-add-aoi-button'
        onClick={() => {
          type.value === "csv" ? handleDownloadCsv() : handleDownloadShp();
        }}
        className={`p-1 bg-main-blue text-white w-full text-sm rounded-lg py-2`}
      >
        <p>Proceed</p>
      </button>
    </div>
  );
};

export default FileFormatDownload;
