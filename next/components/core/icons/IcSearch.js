import * as React from "react";

function IcSearch({ active }) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      className={`fill-current text-xl ${
        active ? "text-main-blue" : "text-[#747B85]"
      }`}
    >
      <path d='M23.632 21.591l-5.44-5.44a10.05 10.05 0 002.014-6.048C20.206 4.533 15.674 0 10.103 0 4.533 0 0 4.532 0 10.103c0 5.57 4.532 10.103 10.103 10.103a10.05 10.05 0 006.047-2.014l5.441 5.44a1.446 1.446 0 002.041-2.041zM2.887 10.103a7.216 7.216 0 117.216 7.217 7.225 7.225 0 01-7.216-7.217z' />
    </svg>
  );
}

const MemoIcSearch = React.memo(IcSearch);
export default MemoIcSearch;
