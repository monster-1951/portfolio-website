import Image from "next/image";
import React from "react";
import HeroImage from "@/images/Myself-removebg-preview.png";
import { Button } from "../ui/button";
import Link from "next/link";
import MySocialHandles from "./MySocialHandles";

const a = "border border-t-0 border-r-0 border-l-0 border-b-[#ff3131]";
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

{
  /* <div className="flex glass h-fit w-fit mx-auto md:p-8">
  <div className="h-fit w-full p-3 font-medium">
    <div className="w-full flex rounded-xl">
      <Image
        alt="Hero Image"
        src={HeroImage}
        className=" mx-auto h-60 w-[80%] sm:w-[50%] md:hidden rounded-xl py-3"
      />
    </div>
    <div className="text-xl">
      <h1 className="md:text-2xl p-3 font-extrabold text-xl -mt-4">
        WHY DO YOU NEED A PROFESSIONAL WEBSITE
      </h1>
      <div className="p-3 font-semibold md:text-2xl text-lg">
        <div className="flex">
          <span>&#x2022; </span>
          <p>Build Strong Online Presence 🏆</p>
        </div>
        <div className="flex">
          <span>&#x2022; </span>
          <p>Attract more clients 🧲</p>
        </div>
        <div className="flex">
          <span>&#x2022; </span>
          <p>Make your business grow 💹</p>
        </div>
        <div className="flex justify-start items-center w-full p-3 space-x-3">
          <Link href={"/ContactShivaShankar"}>
            <Button
              variant={"outline"}
              className="border-2 w-fit font-semibold hover:font-bold"
            >
              Contact me
            </Button>
          </Link>
          <Link href={"/MyWork"}>
          <Button
            variant={"outline"}
            className="border-2 w-fit font-semibold hover:font-bold"
          >
            See My work
          </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <Image
    alt="Hero Image"
    src={HeroImage}
    className="hidden md:inline sm:h-60 w-[60%] xl:w-[40%]  rounded-xl p-2 mt-5"
  />
</div> */
}
