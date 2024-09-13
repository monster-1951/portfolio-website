import Link from "next/link";
import React from "react";

interface XIconProps {
  width: string;
  height: string;
  mt:string
}

const XIcon = ({ width, height,mt }: XIconProps) => {
  return (
    <Link href={"https://x.com"} target="_blank" rel="noopener noreferrer">
      <div className={`-mt-${mt}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width={width}
          height={height}
        >
          <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
        </svg>
      </div>
    </Link>
  );
};

export default XIcon;
