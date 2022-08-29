import React from "react";
import shallow from "zustand/shallow";
import { useNav } from "../../hooks/useNav";
import { LayerManagementItem, AboutContent } from "./sidebar-content";

const SideLayerManagement = () => {
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );

  return (
    <div className="flex h-full flex-col px-4 pt-9 pb-6 dark:bg-gray-800">
      <div>
        <div className="flex items-center justify-between ">
          <p className="text-gray-800 dark:text-gray-100">
            {activeSideFeature?.label || ""}
          </p>
          <button onClick={() => setActiveSideFeature(null)}>
            <img src="/images/ic-close.svg" alt="close button" className="" />
          </button>
        </div>
        <hr className="my-3 text-gray-200" />
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
        {/* default IcEyeVariant  =  Base */}
        <LayerManagementItem name="Toponim Pulau" subName="POI" />
        {/* croshed IcEyeVariant variant */}
        <LayerManagementItem
          name="Basat Wilayah Desa"
          subName="Pollyline"
          icEyeVariant="croshed"
        />

        {/* isActive state eye icon */}
        <LayerManagementItem
          name="Batas Wilayah Kecamatan"
          subName="POI"
          isActive={true}
        />

        <LayerManagementItem name="Batas Garis Pantai" subName="Polyline" />
        <LayerManagementItem name="Konservasi Laut" subName="Polygon" />
        <LayerManagementItem name="RBI_Light_Intensity" subName="Raster" />
        <LayerManagementItem name="RBI_Area_Wisata" subName="Polygon" />
      </div>

      <div className="mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700">
        {/* pass onClose props for button close */}
        <AboutContent header="About Data Layers">
          Anda dapat mengatur tampilan layer pada peta lorem ipsum dolor
        </AboutContent>
      </div>
    </div>
  );
};

export default SideLayerManagement;
