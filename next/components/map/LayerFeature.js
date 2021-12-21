import React, { useContext, useState, useEffect } from "react";

import MapContext from "../../context/MapContext";
import CustomLayerItem from "./CustomLayerItem";

const LayerFeature = () => {
  const { activeLayer, map } = useContext(MapContext);
  const [toponimVisibility, setToponimVisibility] = useState(
    map.getLayer("titikPulauMvt")
      ? map.getLayoutProperty("titikPulauMvt", "visibility") === "visible"
        ? true
        : false
      : true
  );
  useEffect(() => {
    map.getLayer("titikPulauMvt") &&
      map.setLayoutProperty(
        "titikPulauMvt",
        "visibility",
        toponimVisibility ? "visible" : "none"
      );
  }, [toponimVisibility]);
  return (
    <div className='flex flex-col gap-2 max-h-[600px]'>
      <div
        className='flex items-center justify-between'
        data-cy='toponim-layer-control'
      >
        <p className='text-xs text-black-2'>Toponim Pulau</p>
        <button
          onClick={() => {
            setToponimVisibility((prev) => !prev);
          }}
        >
          <img
            src={
              toponimVisibility
                ? "/images/ic-eye.svg"
                : "/images/ic-eye-crossed.svg"
            }
            alt='see icon'
            className='w-4'
          />
        </button>
      </div>
      {activeLayer.length > 0 &&
        activeLayer
          .map((el, index) => (
            <CustomLayerItem
              key={el.simpul}
              simpulIndex={index}
              layer={el.layer}
              title={el.simpul}
              item={el}
            />
          ))
          .reverse()}
    </div>
  );
};

export default LayerFeature;
