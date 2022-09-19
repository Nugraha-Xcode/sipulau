import React from "react";
// import IcCloseUpload from "../../../../core/icons/icCloseUpload";
import style from "./InputDropFiles.module.css";
import shp from "shpjs";

const InputDropFiles = ({ files, setFiles, setShpData }) => {
  const inputRef = React.useRef(null);
  // state for dragging files
  const [dragging, setDragging] = React.useState(false);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragging(true);
    } else if (e.type === "dragleave") {
      setDragging(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      //  set files credential to the state of files
      setFiles(e.dataTransfer.files);
      let buffer = await e.dataTransfer.files[0].arrayBuffer();
      shp(buffer).then(function (geojson) {
        if (Array.isArray(geojson)) {
          setShpData(geojson);
        } else {
          setShpData([geojson]);
        }
      });
    }
  };

  // triggers when file is selected with click
  const handleChange = async (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      //  set files credential to the state of files
      setFiles(e.target.files);
      let buffer = await e.target.files[0].arrayBuffer();
      shp(buffer).then(function (geojson) {
        if (Array.isArray(geojson)) {
          setShpData(geojson);
        } else {
          setShpData([geojson]);
        }
      });
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      {files ? (
        <div className={style.item_upload}>
          {files[0]?.name}
          <img
            src='images/ic-action.svg'
            className={style.button_close}
            onClick={() => setFiles("")}
          />
        </div>
      ) : (
        <form
          className={dragging ? style.container_active : style.container_upload}
          onDragEnter={handleDrag}
          onSubmit={(e) => e.preventDefault()}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            accept='.zip'
            className={style.input}
            type='file'
            multiple={true}
            onChange={handleChange}
          />

          <img
            onClick={onButtonClick}
            src='images/addFile.png'
            className={style.upload_image}
          />
          <p className={style.title_upload}>Click or drag file here</p>
        </form>
      )}
    </>
  );
};

export default InputDropFiles;
