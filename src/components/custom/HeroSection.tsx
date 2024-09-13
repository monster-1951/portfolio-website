import Image from "next/image";
import React from "react";
import HeroImage from "@/images/2.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="heroBgImage glass mt-2 mx-2 border-4 border-black rounded-xl flex flex-1 space-x-4  p-4 h-fit">
      <div className="h-fit w-full p-3 font-medium ">
        <div className="text-xl">
          <h1 className="md:text-2xl p-3 font-extrabold text-xl -mt-4">
            WHY DO YOU NEED A PROFESSIONAL WEBSITE ?
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
              <Button
                variant={"outline"}
                className="border-2 w-fit font-semibold hover:font-bold"
              >
                Know more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="Hero Image"
        src={HeroImage}
        className="hidden sm:inline sm:h-60 w-auto h-20 rounded-xl"
      />
    </div>
  );
};

export default HeroSection;
