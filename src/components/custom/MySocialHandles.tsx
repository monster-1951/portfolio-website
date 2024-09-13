import React from "react";
import IGIcon from "./icons/IGIcon";
import FBIcon from "./icons/FBIcon";
import XIcon from "./icons/XIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

interface MySocialHandlesProps{
    style:string
}

const MySocialHandles = ({style}:MySocialHandlesProps) => {
  return (
    <div className={`${style} flex`}>
      {" "}
      <div id="insta">
        <IGIcon height="52px" width="52px" />
      </div>
      <div id="fb">
        <FBIcon width="52px" height="52px" />
      </div>
      <div id="X">
        <XIcon width="52px" height="52px" />
      </div>
      <div id="LK">
        <LinkedinIcon width="52px" height="52px" />
      </div>
      <div id="mail"></div>
      <div id="mobile"></div>
    </div>
  );
};

export default MySocialHandles;
