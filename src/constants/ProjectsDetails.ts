import { Project } from "@/types/Project.type";

import Weather from "@/images/projectImages/WeatherSample.png";
import Weather1 from "@/images/projectImages/WeatherSample1.png";

import Recipe from "@/images/projectImages/Recipe.png";
import Recipe2 from "@/images/projectImages/RecipeFind2.png";
import Recipe3 from "@/images/projectImages/Recipe3.png";

import Medium from "@/images/projectImages/Medium.png";
import Medium1 from "@/images/projectImages/Medium1.png";
import Medium2 from "@/images/projectImages/Medium2.png";
import Medium3 from "@/images/projectImages/Medium3.png";
import Medium4 from "@/images/projectImages/Medium4.png";
import Medium5 from "@/images/projectImages/Medium5.png";
import Medium6 from "@/images/projectImages/Medium6.png";
import Medium7 from "@/images/projectImages/Medium7.png";

import Blog from "@/images/projectImages/BlogSpot.png";
import Blog1 from "@/images/projectImages/BlogSpot1.png";
import Blog2 from "@/images/projectImages/BlogSpot2.png";
import Blog3 from "@/images/projectImages/BlogSpot3.png";
import Blog4 from "@/images/projectImages/BlogSpot4.png";
import Blog5 from "@/images/projectImages/BlogSpot5.png";
import Blog6 from "@/images/projectImages/BlogSpot6.png";
import Blog7 from "@/images/projectImages/BlogSpot7.png";
import Blog8 from "@/images/projectImages/BlogSpot8.png";
import Blog9 from "@/images/projectImages/BlogSpot9.png";
import Blog10 from "@/images/projectImages/BlogSpot10.png";


export const Projects: Project[] = [
    {
      Title: "Clone of Medium.com",
      Description:
        "This is my first major project . It is the clone of a famous blogging platform called Medium. You can google it to see the original one . This project improved my problem solving skills and made my approach towards development more better . Even though it is pure frontend project that has no connection with any kind of database , I smartly made arrangements for it to store the blogs that users upload. The reason I've not used backend was I just knew frontend that time . This project proved how well I can implement the available resources more efficiently . Just give it a try 😊",
      Image: [
        Medium,
        Medium1,
        Medium2,
        Medium3,
        Medium4,
        Medium5,
        Medium6,
        Medium7,
      ],
      Link: "https://monster-1951.github.io/MediumClone/",
      Date: "May , 2024",
      TechStack: ["React", "Tailwind CSS", "JavaScript", "BootStrap"],
    },
    {
      Title: "Blogging Platform",
      Description:
        "This is my favourite major project . It is almost similar to the previous one but this time I included backend also . Previously I just used frontend and made an amazing web app but now I have backend knowledge so, it is more awesome . There is feature for everyone to create their own account , login ,create blog posts that support image uploads , users can like the posts , they can set a profile picture and so on..... Of course the design was same as the previous one but the functionality has increased a lot",
      Image: [
        Blog,
        Blog1,
        Blog2,
        Blog3,
        Blog4,
        Blog5,
        Blog6,
        Blog7,
        Blog8,
        Blog9,
        Blog10,
      ],
      Link: "https://blog-spot-eosin.vercel.app/",
      Date: "August , 2024",
      TechStack: [
        "NextJS",
        "Tailwind CSS",
        "TypeScript",
        "MongoDB",
        "Next-Auth:Authentication",
      ],
    },
    {
      Title: "Recipe Finder",
      Description:
        "This is the simple web app where you can search for any recipe and get all the recipes with that name including images,ingredients required and a link to know the full recipe . I've built this project with in 2 dedicated days since I was a beginner by that time",
      Image: [Recipe, Recipe2, Recipe3],
      Link: "https://monster-1951.github.io/RecipeFinder/",
      Date: "April , 2024",
      TechStack: ["React", "Tailwind CSS", "JavaScript", "BootStrap"],
    },
    {
      Title: "Weather",
      Description:
        "This was my first minor project . It took me 2 dedicatad days to create this project . In this project you can search for any location and get the temperature, humidity , wind speed of that particular location. Of course it was a simple project but it taught me a lot.",
      Image: [Weather, Weather1],
      Link: "https://monster-1951.github.io/Weather/",
      Date: "April , 2024",
      TechStack: ["React", "Tailwind CSS", "JavaScript", "BootStrap"],
    },
  ];