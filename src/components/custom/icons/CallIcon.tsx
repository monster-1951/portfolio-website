import Link from "next/link";
import React from "react";

const CallIcon = () => {
  return (
    <Link href={"tel:+917816081995"}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
      >
        <path
          d="M0 0 C3.50182457 3.41826693 5.82548924 7.45848825 6.375 12.3125 C6.25125 13.199375 6.1275 14.08625 6 15 C5.54781326 18.87871033 5.54781326 18.87871033 7.5 20.625 C7.995 21.07875 8.49 21.5325 9 22 C9 22.66 9 23.32 9 24 C9.5775 24.28875 10.155 24.5775 10.75 24.875 C12.83333333 25.91666667 14.91666667 26.95833333 17 28 C17.33 27.67 17.66 27.34 18 27 C22.64859955 26.18649508 25.10525815 27.47296485 28.875 30 C30.25942203 30.98691471 31.63767634 31.98279833 33 33 C32.71860476 36.65813817 32.43656214 39.31896306 30.4375 42.4375 C26.95257667 44.67142521 23.95454614 44.67605293 20 44 C8.36921262 39.92922442 -3.47347479 27.6279342 -9.4375 17 C-11.35997235 12.72690644 -11.76279145 9.65302782 -11 5 C-8.15836837 1.10101707 -4.82842768 -0.73935299 0 0 Z "
          fill="#e92048"
          transform="translate(14,3)"
        />
      </svg>
    </Link>
  );
};

export default CallIcon;