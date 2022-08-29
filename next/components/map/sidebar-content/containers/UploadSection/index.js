import React from "react";
import { Button, InputDropFiles } from "../../core";
import style from "./UploadSection.module.css";

const UploadSection = () => {
  // state for save the files value
  const [files, setFiles] = React.useState("");

  // state for save the value of input
  const [valueInput, setValueInput] = React.useState("");

  return (
    <div className={style.container}>
      <input
        className={style.input_layer}
        placeholder="Input Layer Name"
        onChange={(e) => setValueInput(e.target.value)}
      ></input>

      {/* files and setFiles should be pass beetween props for manage the value of files  */}
      <InputDropFiles files={files} setFiles={setFiles} />

      <div className={style.info_upload_container}>
        <img src="images/upload_info.png" className={style.info_upload_image} />
        <p className={style.info_text}>Accepted format .zip (max. 5 MB).</p>
      </div>

      <Button variant="normal" isActive={valueInput && files}>
        Upload
      </Button>
    </div>
  );
};

export default UploadSection;
