import Image from "next/image";
import React from "react";
import HeroImage from "@/images/Myself.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="mt-2 mx-2 border-4 rounded-xl border-purple-950 flex flex-1 space-x-4  p-4 h-fit">
      <div className="h-fit w-full p-3 font-medium text-purple-950">
        <div className="text-xl">
          <h1 className="md:text-2xl p-3 font-bold text-xl -mt-4">
            WHY DO YOU NEED A PROFESSIONAL WEBSITE ?
          </h1>
          <div className="p-3 font-semibold md:text-2xl text-lg">
            <p>&#x2022; Build Strong Online Presence 🏆</p>
            <p>&#x2022; Attract more clients 🧲</p>
            <p>&#x2022; Make your business grow 💹</p>
            <div className="flex justify-start items-center w-full p-3 space-x-3">
              <Link href={'/ContactShivaShankar'}>
              <Button
                variant={"outline"}
                className="border-2 border-purple-950 w-fit font-semibold hover:font-bold"
              >
                Contact me
              </Button></Link>
              <Button
                variant={"outline"}
                className="border-2 border-purple-950 w-fit font-semibold hover:font-bold"
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
