import * as React from "react";

function IcDownload({ active }) {
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
        <path d='M16.135 2.331a7.179 7.179 0 012.62 3.5 5.982 5.982 0 013.684 9.965 1.197 1.197 0 01-.897.407c-.29 0-.572-.107-.79-.3a1.195 1.195 0 01-.107-1.698 3.59 3.59 0 00-2.692-5.982h-.072a1.196 1.196 0 01-1.196-.957 4.786 4.786 0 00-9.38 0 1.196 1.196 0 01-1.196.957h-.12a3.59 3.59 0 00-2.692 5.982 1.197 1.197 0 11-1.794 1.52A5.982 5.982 0 015.188 5.83a7.178 7.178 0 0110.947-3.499z' />
        <path d='M13.168 18.56l1.567-1.508a1.194 1.194 0 011.753-.027 1.196 1.196 0 01-.102 1.75l-3.59 3.47a1.197 1.197 0 01-1.674-.012l-3.59-3.59a1.2 1.2 0 111.7-1.698l1.543 1.555v-6.688a1.196 1.196 0 112.393 0v6.748z' />
      </g>
      <defs>
        <clipPath id='prefix__clip0'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoIcDownload = React.memo(IcDownload);
export default MemoIcDownload;
