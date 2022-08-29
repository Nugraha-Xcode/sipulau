import React from "react";
import { Button, Dropdown } from "../../core";
import style from "./FileFormatDownload.module.css";

const FileFormatDownload = () => {
  // dropdown value
  const value = [{ name: "CSV" }, { name: "SHP" }];

  // selected value from dropdown
  const [selectedValue, setSelectedValue] = React.useState(value[0]);

  return (
    <div className={style.container}>
      <Dropdown
        value={value}
        onValueSelected={(item) => setSelectedValue(item)}
        valueSelected={selectedValue}
        gapOptions="25px"
        direction="up"
      />
      {/* there is isActive props available for passing the button proceed logic */}
      <Button variant="normal">Proceed</Button>
    </div>
  );
};

export default FileFormatDownload;
