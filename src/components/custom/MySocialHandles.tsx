import React from "react";
import IGIcon from "./icons/IGIcon";
import FBIcon from "./icons/FBIcon";
import XIcon from "./icons/XIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

interface MySocialHandlesProps {
  style: string;
  AboutPage?: boolean;
}

const MySocialHandles = ({ style, AboutPage }: MySocialHandlesProps) => {
  return (
    <div className={`${style} flex `}>
      {" "}
      <div className="flex">
        <div id="insta">
          <IGIcon height={AboutPage?'24px':'52px'} width={AboutPage?'24px':'52px'} mt="" />
        </div>
        <div id="fb">
          <FBIcon width={AboutPage?'24px':'52px'} height={AboutPage?'24px':'52px'} mt="" />
        </div>
      </div>
      <div className="flex">
        <div id="X">
          <XIcon width={AboutPage?'24px':'52px'} height={AboutPage?'24px':'52px'} mt="" />
        </div>
        <div id="LK">
          <LinkedinIcon width={AboutPage?'24px':'52px'} height={AboutPage?'24px':'52px'} mt="" />
        </div>
      </div>
      {AboutPage && (
        <div className="flex">
          <div id="mobile" className="p-1 text-red-500">
            <IoCall />
          </div>
          <div id="mail">
            <IoMail className="text-blue-500 mt-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MySocialHandles;
