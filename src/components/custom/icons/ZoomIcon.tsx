import React from "react";

const ZoomIcon = () => {
  return (
   <div className="-mt-1">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="24px"
      height="24px"
    >
      <circle cx="24" cy="24" r="20" fill="#2196f3" />
      <path
        fill="#fff"
        d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
      />
      <polygon fill="#fff" points="37,31 31,27 31,21 37,17" />
    </svg>
   </div>
  );
};

export default ZoomIcon;
