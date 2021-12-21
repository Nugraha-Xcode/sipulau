import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("sideBarRight");
  let featureObj = {};
  switch (feature) {
    case "layer":
      featureObj = { label: "button1", component: <LayerFeature /> };
      break;
    case "basemap":
      featureObj = { label: "button3", component: <BasemapFeature /> };
      break;
    case "download":
      featureObj = {
        label: "button4",
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
      featureObj = { label: "button5", component: <CommentFeature /> };
      break;
    default:
      break;
  }
  return (
    <div data-cy='feature-tab-card'>
      <div className='flex justify-between px-3 py-3'>
        <p className='text-main-gray font-semibold'>{t(featureObj.label)}</p>
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
    </div>
  );
};

export default FeatureTab;
