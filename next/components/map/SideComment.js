import React from "react";
import shallow from "zustand/shallow";
import { useNav } from "../../hooks/useNav";
import CommentFeature from "./CommentFeature";
import { AboutContent, CommentSection } from "./sidebar-content";

const SideComment = () => {
  const [setActiveSideFeature, activeSideFeature] = useNav(
    (state) => [state.setActiveSideFeature, state.activeSideFeature],
    shallow
  );

  return (
    <div className='flex h-full flex-col px-4 pt-9 pb-6 dark:bg-gray-800'>
      <div>
        <div className='flex items-center justify-between '>
          <p className='text-gray-800 dark:text-gray-100'>
            {activeSideFeature?.label || ""}
          </p>
          <button onClick={() => setActiveSideFeature(null)}>
            <img src='/images/ic-close.svg' alt='close button' className='' />
          </button>
        </div>
        <hr className='my-3 text-gray-200' />
      </div>
      <div className='flex flex-1 flex-col gap-2 overflow-y-auto'>
        {/* open this comment for more detail */}
        {/* <CommentSection /> */}
        <CommentFeature />
      </div>

      <div className='mt-2 rounded-[4px] bg-gray-50 p-2 dark:bg-gray-700'></div>
    </div>
  );
};

export default SideComment;
