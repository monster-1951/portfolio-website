import Image from "next/image";
import React from "react";
import HeroImage from "@/images/2.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className=" flex flex-1 space-x-4  p-4 h-[85vh] sm:h-[90vh] ">
      <div className="flex glass h-fit w-fit mx-auto md:p-8">
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
      </div>
    </div>
  );
};

export default HeroSection;
