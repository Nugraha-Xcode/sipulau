import Tippy from "@tippyjs/react";

const ZoomInController = ({ map }) => {
  return (
    <div
      className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-white text-gray-600 hover:bg-gray-50 hover:text-brand-400'
      onClick={() => {
        map.zoomIn();
      }}
    >
      <Tippy content='Zoom In' placement='right' delay={300}>
        <img src='/images/ic-plus.svg' alt='icon' className='w-4 h-4' />
      </Tippy>
    </div>
  );
};

export default ZoomInController;
