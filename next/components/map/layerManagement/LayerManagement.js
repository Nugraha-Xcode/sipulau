import React from "react";
import shallow from "zustand/shallow";
import { useNav } from "../../../hooks/useNav";
import { useNetwork } from "../../../hooks/useNetwork";
import { AboutContent } from "../sidebar-content";
import LayerManagementItem from "./LayerManagementItem";

const LayerManagement = () => {
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );

  const [activeLayer] = useNetwork((state) => [state.activeLayer], shallow);

  return (
    <div
      id='side-feature-content'
      className='flex h-full flex-col px-4 pt-20 pb-6 dark:bg-gray-800 '
    >
      <div>
        <div className='flex items-center justify-between '>
          <p className='text-xl text-gray-800 dark:text-gray-100'>
            {activeSideFeature?.label || ""}
          </p>
          <button onClick={() => setActiveSideFeature(null)}>
            <img src='/images/ic-close.svg' alt='close button' className='' />
          </button>
        </div>
        <hr className='my-3 text-gray-200' />
      </div>
      <div className='flex flex-1 flex-col gap-2 overflow-y-auto'>
        {/* default IcEyeVariant  =  Base */}

        {/* <div className='flex flex-col border-[1px] w-full h-[fit-content] relative pl-5 pr-3 py-3 rounded-[4px] shadow-style-1 gap-3'>
          <div className='flex justify-between w-full h-full relative cursor-pointer gap-2'>
            <div className='absolute w-[5px] rounded-xl h-full top-0 -left-3 bottom-0 m-auto bg-[#FFCE1E]' />

            <div className='flex flex-col'>
              <div className='font-semibold text-xs'>Toponim Pulau</div>
              <div className='text-gray-3 text-[10px]'>POI</div>
            </div>

            <div className='flex gap-2 h-full items-center'>
              <button onClick={() => setToponimVisibility((prev) => !prev)}>
                <img
                  src={`${
                    toponimVisibility
                      ? "/images/ic-eye.svg"
                      : "/images/ic-eye-crossed.svg"
                  }`}
                  alt='icon'
                  className='w-4 h-4'
                />
              </button>
            </div>
          </div>
        </div> */}

        {activeLayer.length > 0 &&
          activeLayer
            .map((el, index) => (
              <LayerManagementItem
                key={el.nama + el.judul}
                item={el}
                index={index}
              />
            ))
            .reverse()}

        {/* <LayerManagementItem name='Basat Wilayah Desa' subName='Pollyline' />

        <LayerManagementItem
          name='Batas Wilayah Kecamatan'
          subName='POI'
          isActive={true}
        />

        <LayerManagementItem name='Batas Garis Pantai' subName='Polyline' />
        <LayerManagementItem name='Konservasi Laut' subName='Polygon' />
        <LayerManagementItem name='RBI_Light_Intensity' subName='Raster' />
        <LayerManagementItem name='RBI_Area_Wisata' subName='Polygon' /> */}
      </div>

      <div className='mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700'>
        {/* pass onClose props for button close */}
        <AboutContent header='About Data Layers'>
          Anda dapat mengatur tampilan layer pada peta lorem ipsum dolor
        </AboutContent>
      </div>
    </div>
  );
};

export default LayerManagement;
