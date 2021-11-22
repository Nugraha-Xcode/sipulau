import React from "react";

function IcFilter({ queryFilter }) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 16 15'
      fill='none'
      className={`h-4 fill-current ${
        queryFilter ? "text-main-blue" : "text-main-gray"
      }`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M.068.421A.727.727 0 01.728 0h14.545a.727.727 0 01.555 1.197l-5.646 6.677v5.944a.727.727 0 01-1.053.65L6.22 13.015a.727.727 0 01-.402-.65v-4.49L.172 1.197A.727.727 0 01.068.42zm2.227 1.034L7.1 7.138a.727.727 0 01.172.47v4.306l1.454.727V7.607c0-.172.061-.338.172-.47l4.806-5.682H2.295z'
      />
    </svg>
  );
}

const MemoIcFilter = React.memo(IcFilter);
export default MemoIcFilter;
