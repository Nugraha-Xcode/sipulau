import React from "react";

function IcMapFilter({ bbox }) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      fill='none'
      className={`fill-current text-xl ${
        bbox ? "text-main-blue" : "text-[#747B85]"
      }`}
    >
      <path d='M12.19 3c.421 0 .762.34.762.761v.008a.762.762 0 11-1.523 0V3.76c0-.42.34-.762.761-.762z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.3.502a3.81 3.81 0 015.224 5.152.738.738 0 01-.043.068l-2.666 3.81a.762.762 0 01-1.249 0L8.9 5.721a.763.763 0 01-.043-.068A3.81 3.81 0 0110.301.502zm1.89 1.022a2.286 2.286 0 00-2.017 3.36l2.018 2.882 2.017-2.883a2.286 2.286 0 00-2.018-3.36z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.333 1.475c.128 0 .249.032.355.088l1.129.564a.762.762 0 01-.682 1.363l-.04-.02v8.201l3.048 1.524v-2.577a.762.762 0 111.524 0v2.577l3.047-1.524v-1.053a.762.762 0 111.524 0v1.524a.762.762 0 01-.421.682l-4.558 2.278a.757.757 0 01-.709 0l-4.217-2.108-4.23 2.115A.762.762 0 010 14.428V4.523c0-.289.163-.552.421-.681l4.558-2.28a.759.759 0 01.354-.087zm-.762 10.196l-3.047 1.524V4.994L4.57 3.47v8.201z'
      />
    </svg>
  );
}

const MemoIcMapFilter = React.memo(IcMapFilter);
export default MemoIcMapFilter;
