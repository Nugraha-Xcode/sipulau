import { useTranslation } from "next-i18next";
import React from "react";
import shallow from "zustand/shallow";
import { useNav } from "../../../hooks/useNav";
import { AboutContent } from "../sidebar-content";
import UploadSection from "./UploadSection";

const SideUpload = () => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["map"] };
    return t(key, params);
  };
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );

  return (
    <div
      id='side-feature-content'
      className='flex h-full flex-col px-4 pt-20 pb-6 dark:bg-gray-800'
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
        <UploadSection />
      </div>

      <div className='mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700'>
        <AboutContent header={translatedText("upload.aboutTitle")}>
          {translatedText("upload.aboutUpload")}
        </AboutContent>
      </div>
    </div>
  );
};

export default SideUpload;
