import React from "react";
import { useTranslation } from "react-i18next";
import CommentList from "./CommentList";
import DetailInformasi from "./DetailInformasi";
import DetailInformasiPulauTerluar from "./DetailInformasiPulauTerluar";

const SidePopup = ({ setIsOpen, feature, detailPulau, infoPulau, activeLayer }) => {
  const { t } = useTranslation("popupPulau");
  let featureObj = {};
  
  switch (feature) {
    case "detail":
      // Kondisi untuk menentukan komponen detail mana yang digunakan
      let detailComponent;
      if (activeLayer === "pulau-terluar") {
        detailComponent = <DetailInformasiPulauTerluar detailPulau={detailPulau} />;
      } else {
        detailComponent = <DetailInformasi detailPulau={detailPulau} />;
      }
      
      featureObj = {
        label: t("viewDetailInfo"),
        component: detailComponent,
      };
      break;
    case "comment":
      featureObj = {
        label: t("commentList"),
        component: <CommentList infoPulau={infoPulau} />,
      };
      break;
    default:
      break;
  }
  
  return (
    <div className='rounded-lg'>
      <div className='p-4 flex'>
        <button onClick={() => setIsOpen(false)}>
          <img src='/images/ic-union-left.svg' alt='close button' />
        </button>
        <p className='flex-1 text-center text-main-gray text-xs font-semibold'>
          {featureObj.label}
        </p>
      </div>
      <hr />
      {featureObj.component}
    </div>
  );
};

export default SidePopup;