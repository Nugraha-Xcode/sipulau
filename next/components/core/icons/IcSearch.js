import * as React from "react";

function IcSearch() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='fill-current'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6 10.64C8.5626 10.64 10.64 8.5626 10.64 6C10.64 3.4374 8.5626 1.36 6 1.36C3.4374 1.36 1.36 3.4374 1.36 6C1.36 8.5626 3.4374 10.64 6 10.64ZM6 12C9.3137 12 12 9.31371 12 6C12 2.68629 9.3137 0 6 0C2.68629 0 -3.8147e-06 2.68629 -3.8147e-06 6C-3.8147e-06 9.31371 2.68629 12 6 12Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.41424 9.38748C9.67163 9.12887 10.0712 9.11104 10.3067 9.34767L15.0227 14.0862C15.2582 14.3229 15.2404 14.7243 14.983 14.983C14.7257 15.2416 14.3261 15.2594 14.0906 15.0228L9.37462 10.2842C9.13912 10.0476 9.15686 9.6461 9.41424 9.38748Z'
      />
    </svg>
  );
}

const MemoIcSearch = React.memo(IcSearch);
export default MemoIcSearch;
