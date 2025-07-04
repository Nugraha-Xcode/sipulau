import React from "react";

const MemoIcUpload = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={color}
    >
      <path
        d="M18.707 6.70697L17.293 5.29297L12 10.586L6.70697 5.29297L5.29297 6.70697L10.586 12L5.29297 17.293L6.70697 18.707L12 13.414L17.293 18.707L18.707 17.293L13.414 12L18.707 6.70697Z"
        fill="#3675BC"
      />
    </svg>
  );
};

const IcCloseUpload = React.memo(MemoIcUpload);

export default IcCloseUpload;
