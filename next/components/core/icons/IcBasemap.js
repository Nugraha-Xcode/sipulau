import * as React from "react";

function IcBasemap({ active }) {
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
      <g clipPath='url(#prefix__clip0)'>
        <path d='M23.336 4.462l-7.2-3.6a1.2 1.2 0 00-1.074 0L8.306 4.24 1.58 1.997A1.2 1.2 0 000 3.136v15.6c0 .456.257.87.664 1.074l7.2 3.6a1.207 1.207 0 001.072 0l6.756-3.377 6.728 2.243a1.199 1.199 0 001.579-1.14V5.535a1.196 1.196 0 00-.663-1.072zM9.6 6.277l4.8-2.4v14.116l-4.8 2.4V6.277zM2.4 4.8l4.8 1.6v13.993l-4.8-2.4V4.8zm19.2 14.672l-4.8-1.6V3.877l4.8 2.4v13.195z' />
      </g>
      <defs>
        <clipPath id='prefix__clip0'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoIcBasemap = React.memo(IcBasemap);
export default MemoIcBasemap;
