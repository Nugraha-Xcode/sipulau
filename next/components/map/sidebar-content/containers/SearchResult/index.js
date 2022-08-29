import React from "react";
import style from "./SearchResult.module.css";
import Slider from "./Slider";

const SearchResult = ({ onDetail, imageData, geoInfo, name }) => {
  return (
    <div className={style.container}>
      <div className={style.image_container}>
        <Slider data={imageData} />
      </div>
      <div className={style.geo_info}>
        <p> {geoInfo}</p>
      </div>
      <div className={style.content}>
        <div className={style.name}>Pulau Seribu</div>
        <div className={style.detail_info}>
          <a onClick={onDetail}>{name}</a>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
