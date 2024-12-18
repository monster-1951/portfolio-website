import Image from "next/image";
import React from "react";
import HeroImage from "@/images/Myself-removebg-preview.png";
import { Button } from "../ui/button";
import Link from "next/link";
import MySocialHandles from "./MySocialHandles";

const HeroText =
  "I craft responsive websites , that drive engagement and growth";
const Name = {
  Title: " Shiva Shankar Web Dev",
  Subtitle: "Creative Web Engineer",
};
const HeroSection = () => {
  return (
    <div className="mt-4 flex border-2 border-t-0 border-r-0 border-l-0 border-b-[#ff3131] justify-between w-fit mx-auto h-72 sm:h-fit">
      <div className="flex flex-col p-5 justify-between space-y-4 w-fit">
        <div id="Name" className="">
          <div
            id="Title"
            className="sm:text-2xl md:text-3xl text-xl font-bold text-nowrap"
          >
            {Name.Title}
          </div>
          <div id="Subtitle" className="text-xs font-light">
            {Name.Subtitle}
          </div>
        </div>

        <div id="Text" className="sm:text-xl">
          {HeroText}
        </div>

        <div id="CTA" className="flex justify-between">
          <Link href={"/MyWork"}>
            <Button
              variant={"outline"}
              className="red w-fit font-semibold hover:font-bold"
            >
              See My work
            </Button>
          </Link>
          <Link href={"/ContactShivaShankar"}>
            <Button
              variant={"outline"}
              className="red w-fit font-semibold hover:font-bold"
            >
              Hire me
            </Button>
          </Link>
        </div>

        <div id="ContactDetails" className="flex justify-between">
          <div>Contact me : </div>
          <MySocialHandles AboutPage style="" />
        </div>
      </div>

      <Image
        alt="Hero"
        src={HeroImage}
        height={2000}
        width={2000}
        className=" sm:h-fit h-72 w-fit  my-auto"
      />
    </div>
  );
};

export default HeroSection;

