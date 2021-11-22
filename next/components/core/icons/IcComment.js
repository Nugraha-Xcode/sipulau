import * as React from "react";

function IcComment({ active }) {
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
        <path d='M18.008 8.388H6.025a1.198 1.198 0 000 2.397h11.983a1.198 1.198 0 100-2.397zm-4.793 4.793h-7.19a1.198 1.198 0 000 2.397h7.19a1.198 1.198 0 100-2.397zM12.017 0A11.983 11.983 0 00.034 11.983c-.01 2.767.947 5.45 2.708 7.585L.345 21.965a1.199 1.199 0 00-.251 1.306 1.198 1.198 0 001.138.695h10.785a11.983 11.983 0 100-23.966zm0 21.57H4.12l1.114-1.115a1.198 1.198 0 000-1.69 9.587 9.587 0 116.783 2.805z' />
      </g>
      <defs>
        <clipPath id='prefix__clip0'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoIcComment = React.memo(IcComment);
export default MemoIcComment;
