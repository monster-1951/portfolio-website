"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/Project.type";
import ViewImageDialog from "./ViewImageDialog";

interface ProjectCarouselProps {
  Projectt: Project;
}

const ProjectCarousel = ({ Projectt }: ProjectCarouselProps) => {
  const Project: Project = Projectt;
  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle className="text-center text-2xl border-b-2 red">
          {Project.Title}
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <Carousel
        className="glass w-[85%] mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        >
          <CarouselContent className="">
            {Project.Image.map((image, i) => {
              return (
                <CarouselItem className="h-[180px] my-auto shadow-inner shadow-red-300" key={i}>
                  <Image
                    alt="BlogSpot"
                    src={Project.Image[i]}
                    className="p-2 rounded-xl w-fit mx-auto h-[160px]"
                  />

                  <ViewImageDialog Projectt={Project} i={i} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <CardDescription className="pt-5">
          {Project.Description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex-col space-y-3 w-fit items-start">
        <div id="Tech stack" className="flex space-x-5">
          <div className="font-semibold">Tech Stack Used : </div>
          <div className="flex-col text-left">
            {Project.TechStack.map((tech,i) => {
              return <li key={i}>{tech}</li>;
            })}
          </div>
        </div>
        <div id="Date" className="flex space-x-3 justify-start">
          <div className="font-semibold">Project was done in </div>
          <div className="flex-col text-left">{Project.Date}</div>
        </div>
        <Link
          href={Project.Link}
          className="text-center w-full flex justify-start"
          target="_blank"
        >
          <Button className="red">Visit the project</Button>
        </Link>
        {Project.StarRating?.length && <div id="ClientRating" className=" flex">
          <div className="font-bold p-3 flex">Client Rating :</div>
          <div  className=" flex  h-full my-auto p-3 space-x-3">
          {Project.StarRating.map((rating,index) => {
            return (
              <span key={index} className="flex "> &#9733;</span>
            )
          }
          )}
          </div>
        </div>}
      </CardFooter>
    </Card>
  );
};

export default ProjectCarousel;
