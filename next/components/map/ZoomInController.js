import Tippy from "@tippyjs/react";
import { useTranslation } from "next-i18next";

const ZoomInController = ({ map }) => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["map"] };
    return t(key, params);
  };
  return (
    <div
      className='flex h-10 w-10 mt-2 cursor-pointer items-center justify-center rounded-[4px] bg-white text-gray-600 hover:bg-gray-50 hover:text-brand-400'
      onClick={() => {
        map.zoomIn();
      }}
    >
      <Tippy content={translatedText("zoomIn")} placement='right' delay={300}>
        <img src='/images/ic-plus.svg' alt='icon' className='w-4 h-4' />
      </Tippy>
    </div>
  );
};

export default ZoomInController;
