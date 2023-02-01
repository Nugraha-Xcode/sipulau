import { useTranslation } from "next-i18next";
import React, { useContext } from "react";
import shallow from "zustand/shallow";
import { UploadLayerStore } from "../../../constant";
import AppContext from "../../../context/AppContext";
import { useIndexedDB, useNetwork } from "../../../hooks";
import Button from "../../core/Button";
import { InputDropFiles } from "../sidebar-content/core";

const UploadSection = () => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["map"] };
    return t(key, params);
  };
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
    <div className='w-full h-[fit-content] flex flex-col gap-2'>
      <input
        className='w-full border-[1px] border-[#B4B2AF] rounded-[8px] placeholder-[#4F4C4A] focus:outline-none p-3'
        placeholder={translatedText("upload.inputLayername")}
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      ></input>

      {/* files and setFiles should be pass beetween props for manage the value of files  */}
      <InputDropFiles
        files={files}
        setFiles={setFiles}
        setShpData={setShpData}
      />

      <div className='w-full flex gap-2 items-center'>
        <img
          src='images/upload_info.png'
          className='w-[fit-content] h-[fit-content]'
        />
        <p className='text-sm font-semibold text-[#B4B2AF]'>
          {translatedText("upload.acceptZip")}
        </p>
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
            item.visibility = "visible";
            addToIndexedDb(item);
            uploadLayer.push(item);
          }
          setActiveLayer([...activeLayer, ...uploadLayer]);
          setValueInput("");
          setFiles("");
          setShpData([]);
          handleSetSnack(translatedText("upload.uploadSuccess"), "success");
        }}
      >
        {translatedText("upload.upload")}
      </Button>
    </div>
  );
};

export default UploadSection;
