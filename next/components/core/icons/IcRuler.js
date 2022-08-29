import * as React from "react";

function IcRuler() {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='fill-current'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.8849 2.26826L2.26826 11.8849C2.14329 12.0099 2.14329 12.2125 2.26826 12.3375L5.66237 15.7316C5.78734 15.8565 5.98995 15.8565 6.11492 15.7316L15.7316 6.11492C15.8565 5.98995 15.8565 5.78734 15.7316 5.66237L12.3375 2.26826C12.2125 2.14329 12.0099 2.14329 11.8849 2.26826ZM1.36316 10.9798C0.738322 11.6047 0.738322 12.6177 1.36316 13.2426L4.75727 16.6367C5.38211 17.2615 6.39518 17.2615 7.02001 16.6367L16.6367 7.02001C17.2615 6.39518 17.2615 5.38211 16.6367 4.75727L13.2426 1.36316C12.6177 0.738322 11.6047 0.738321 10.9798 1.36316L1.36316 10.9798Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.0755 12.4195L3.35634 10.7003L4.26144 9.79523L5.9806 11.5144L5.0755 12.4195Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.2595 9.23551L6.54034 7.51635L7.44544 6.61125L9.1646 8.33041L8.2595 9.23551Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.4435 6.05151L9.72432 4.33235L10.6294 3.42725L12.3486 5.14641L11.4435 6.05151Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.24054 11.4006L4.94833 9.10835L5.85343 8.20325L8.14564 10.4955L7.24054 11.4006Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.4245 8.21655L8.13233 5.92434L9.03742 5.01924L11.3296 7.31145L10.4245 8.21655Z'
      />
    </svg>
  );
}

const MemoIcRuler = React.memo(IcRuler);
export default MemoIcRuler;
