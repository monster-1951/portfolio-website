import React from "react";
import IGIcon from "./icons/IGIcon";
import FBIcon from "./icons/FBIcon";
import XIcon from "./icons/XIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

interface MySocialHandlesProps {
  style: string;
  AboutPage: boolean;
}

const MySocialHandles = ({ style, AboutPage }: MySocialHandlesProps) => {
  return (
    <div className={`${style} flex `}>
      {" "}
      <div className="flex">
        <div id="insta">
          <IGIcon height={"24px"} width={"24px"} mt="" Footer={AboutPage} />
        </div>
        <div id="fb">
          <FBIcon width={"24px"} height={"24px"} mt="" Footer={AboutPage} />
        </div>
      </div>
      <div className="flex">
        <div id="X">
          <XIcon width={"24px"} height={"24px"} mt="" Footer={AboutPage} />
        </div>
        <div id="LK">
          <LinkedinIcon
            width={"24px"}
            height={"24px"}
            mt=""
            Footer={AboutPage}
          />
        </div>
      </div>
      {AboutPage && (
        <div className="flex">
          <div id="mobile" className="p-1 text-red-500">
            <Link href={"tel:+917816081995"}>
            <IoCall />
            </Link>
          </div>
          <div id="mail">
            <Link href={"mailto:shivashankarsince19@gmail.com"}>
              <IoMail className="text-blue-500 mt-1" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySocialHandles;
