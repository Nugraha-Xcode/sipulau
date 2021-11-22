import React from "react";
import BasemapFeature from "./BasemapFeature";
import CommentFeature from "./CommentFeature";
import DownloadFeature from "./DownloadFeature";
import LayerFeature from "./LayerFeature";

const FeatureTab = ({
  feature,
  setIsOpenFeature,
  setActiveFeature,
  setDrawItem,
  drawItem,
  drawSelected,
  setDrawSelected,
}) => {
  let featureObj = {};
  switch (feature) {
    case "layer":
      featureObj = { label: "Custom Layer", component: <LayerFeature /> };
      break;
    case "basemap":
      featureObj = { label: "Peta Dasar", component: <BasemapFeature /> };
      break;
    case "download":
      featureObj = {
        label: "Download Data",
        component: (
          <DownloadFeature
            setDrawItem={setDrawItem}
            drawItem={drawItem}
            drawSelected={drawSelected}
            setDrawSelected={setDrawSelected}
          />
        ),
      };
      break;
    case "comment":
      featureObj = { label: "Komentar", component: <CommentFeature /> };
      break;
    default:
      break;
  }
  return (
    <>
      <div className='flex justify-between px-3 py-3'>
        <p className='text-main-gray font-semibold'>{featureObj.label}</p>
        <button
          onClick={() => {
            setIsOpenFeature(false);
            setActiveFeature("");
          }}
        >
          <img src='/images/ic-union-right.svg' alt='close button' />
        </button>
      </div>
      <hr className='text-gray-4 border-t-2 opacity-40' />
      <div className='p-3'>{featureObj.component}</div>
    </>
  );
};

export default FeatureTab;
