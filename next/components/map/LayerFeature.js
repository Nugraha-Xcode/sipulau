import React from "react";
import CustomLayerItem from "./CustomLayerItem";

const LayerFeature = () => {
  return (
    <div className='flex flex-col gap-2'>
      <CustomLayerItem />
      <CustomLayerItem />
    </div>
  );
};

export default LayerFeature;
