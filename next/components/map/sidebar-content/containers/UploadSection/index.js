import React, { useContext } from "react";
import shallow from "zustand/shallow";
import { UploadLayerStore } from "../../../../../constant";
import AppContext from "../../../../../context/AppContext";
import { useIndexedDB, useNetwork } from "../../../../../hooks";
import { Button, InputDropFiles } from "../../core";
import style from "./UploadSection.module.css";

const UploadSection = () => {
  // state for save the files value
  const { handleSetSnack } = useContext(AppContext);
  const [activeLayer, setActiveLayer] = useNetwork(
    (state) => [state.activeLayer, state.setActiveLayer],
    shallow
  );
  const [setDb, db] = useIndexedDB((state) => [state.setDb, state.db], shallow);
  const [files, setFiles] = React.useState("");
  const [shpData, setShpData] = React.useState([]);

  // state for save the value of input
  const [valueInput, setValueInput] = React.useState("");

  const addToIndexedDb = (item) => {
    const txn = db.transaction(UploadLayerStore, "readwrite");

    const store = txn.objectStore(UploadLayerStore);
    //
    let query = store.put(item, valueInput + item.data.fileName);

    query.onsuccess = function (event) {
      console.log(event);
    };

    query.onerror = function (event) {
      console.log(event.target.errorCode);
    };
  };

  return (
    <div className={style.container}>
      <input
        className={style.input_layer}
        placeholder='Input Layer Name'
        onChange={(e) => setValueInput(e.target.value)}
      ></input>

      {/* files and setFiles should be pass beetween props for manage the value of files  */}
      <InputDropFiles
        files={files}
        setFiles={setFiles}
        setShpData={setShpData}
      />

      <div className={style.info_upload_container}>
        <img src='images/upload_info.png' className={style.info_upload_image} />
        <p className={style.info_text}>Accepted format .zip</p>
      </div>

      <Button
        variant='normal'
        isActive={valueInput && files}
        onClick={() => {
          let uploadLayer = [];
          for (const element of shpData) {
            let item = {};
            item.source = "upload";
            item.judul = valueInput;
            item.nama = element.fileName;
            item.url = "";
            item.format = "geojson";
            item.simpul = "Uploaded Layer";
            item.bbox = "";
            item.srs = "";
            item.data = element;
            addToIndexedDb(item);
            uploadLayer.push(item);
          }
          setActiveLayer([...activeLayer, ...uploadLayer]);
          setValueInput("");
          setFiles("");
          setShpData([]);
          handleSetSnack("Layer berhasil ditambahkan", "success");
        }}
      >
        Upload
      </Button>
    </div>
  );
};

export default UploadSection;
