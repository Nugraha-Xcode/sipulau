import { useTranslation } from "next-i18next";
import React from "react";
import { useNetwork } from "../../../hooks";
import { Button } from "../sidebar-content/core";

const NetworkResults = ({
  isActive,
  setIsActive,
  key,
  item,
  thumbnailSource,
  handleTambahLayer,
}) => {
  const { t } = useTranslation("simpulJaringan");
  const activeLayer = useNetwork((state) => state.activeLayer);
  const DEFAULT_BASEMAP_IMAGE =
    "https://tanahair.indonesia.go.id/arcgis_js_api/library/4.15/esri/themes/base/images/basemap-toggle-64.svg";
  return (
    <div
      className='flex border-[1px] w-full gap-3 p-3 rounded-md text-sm items-center'
      key={key}
    >
      <div className='bg-gray-3 w-16 h-12 rounded-lg overflow-hidden'>
        <img
          //  src='https://tanahair.indonesia.go.id/arcgis_js_api/library/4.15/esri/themes/base/images/basemap-toggle-64.svg'
          // src='https://tanahair.indonesia.go.id/proxy/proxy.php?http://jakartasatu.jakarta.go.id/server/rest/services/UTILITAS/Data_Utilitas_View/MapServer/info/thumbnail'
          src={thumbnailSource}
          alt='thumbnail'
          className='object-cover w-16 h-12 '
          onError={(event) => {
            event.target.src = DEFAULT_BASEMAP_IMAGE;
            event.onerror = null;
          }}
        />
      </div>
      <div className=' flex flex-col gap-1 overflow-hidden justify-center'>
        <p className='text-[10px]'>{item.judul}</p>
        <div className='flex gap-2 items-center'>
          <button
            onClick={handleTambahLayer}
            className={`${
              activeLayer.findIndex(
                (el) => el.nama === item.nama && el.judul === item.judul
              ) !== -1
                ? "border-gray-500 text-gray-500"
                : "border-blue-500 text-blue-500"
            } border rounded-xl px-2 py-1 text-[10px] hover:bg-blue-100`}
          >
            {activeLayer.findIndex(
              (el) => el.nama === item.nama && el.judul === item.judul
            ) !== -1
              ? t("layerAdded")
              : t("buttonAddLayer")}
          </button>
          <div className='w-1 h-1 rounded-full bg-main-gray' />
          <a
            data-cy='detail-link'
            href={item.url}
            target='_blank'
            className='text-main-gray text-[10px]'
          >
            {t("detail")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NetworkResults;
