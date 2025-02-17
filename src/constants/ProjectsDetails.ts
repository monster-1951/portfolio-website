import { Project } from "@/types/Project.type";

import Weather from "@/images/projectImages/Weather/WeatherSample.png";
import Weather1 from "@/images/projectImages/Weather/WeatherSample1.png";

import Recipe from "@/images/projectImages/RecipeFinder/Recipe.png";
import Recipe2 from "@/images/projectImages/RecipeFinder/RecipeFind2.png";
import Recipe3 from "@/images/projectImages/RecipeFinder/Recipe3.png";

import Medium from "@/images/projectImages/Medium/Medium.png";
import Medium1 from "@/images/projectImages/Medium/Medium1.png";
import Medium2 from "@/images/projectImages/Medium/Medium2.png";
import Medium3 from "@/images/projectImages/Medium/Medium3.png";
import Medium4 from "@/images/projectImages/Medium/Medium4.png";
import Medium5 from "@/images/projectImages/Medium/Medium5.png";
import Medium6 from "@/images/projectImages/Medium/Medium6.png";
import Medium7 from "@/images/projectImages/Medium/Medium7.png";

import Blog from "@/images/projectImages/BlogSpot/BlogSpot.png";
import Blog1 from "@/images/projectImages/BlogSpot/BlogSpot1.png";
import Blog2 from "@/images/projectImages/BlogSpot/BlogSpot2.png";
import Blog3 from "@/images/projectImages/BlogSpot/BlogSpot3.png";
import Blog4 from "@/images/projectImages/BlogSpot/BlogSpot4.png";
import Blog5 from "@/images/projectImages/BlogSpot/BlogSpot5.png";
import Blog6 from "@/images/projectImages/BlogSpot/BlogSpot6.png";
import Blog7 from "@/images/projectImages/BlogSpot/BlogSpot7.png";
import Blog8 from "@/images/projectImages/BlogSpot/BlogSpot8.png";
import Blog9 from "@/images/projectImages/BlogSpot/BlogSpot9.png";
import Blog10 from "@/images/projectImages/BlogSpot/BlogSpot10.png";

import Gpt1 from "@/images/projectImages/F1Gpt/F1-GPT1.png";
import Gpt2 from "@/images/projectImages/F1Gpt/F1-GPT2.png";
import Gpt3 from "@/images/projectImages/F1Gpt/F1-GPT3.png";
import Gpt4 from "@/images/projectImages/F1Gpt/F1-GPT4.png";

import ZuperMart1 from "@/images/projectImages/Zuper-Mart/zuper-mart1.png";
import ZuperMart2 from "@/images/projectImages/Zuper-Mart/zuper-mart2.png";
import ZuperMart3 from "@/images/projectImages/Zuper-Mart/zuper-mart3.jpg";
import ZuperMart4 from "@/images/projectImages/Zuper-Mart/zuper-mart4.jpg";
import ZuperMart5 from "@/images/projectImages/Zuper-Mart/zuper-mart5.jpg";

import MeghanaElectronics1 from "@/images/projectImages/Meghana-Electronics/M.E.1.jpg";
import MeghanaElectronics2 from "@/images/projectImages/Meghana-Electronics/M.E.2.jpg";
import MeghanaElectronics3 from "@/images/projectImages/Meghana-Electronics/M.E.3.jpg";
import MeghanaElectronics4 from "@/images/projectImages/Meghana-Electronics/M.E.4.jpg";
import MeghanaElectronics5 from "@/images/projectImages/Meghana-Electronics/M.E.5.jpg";


import KidzClub1 from "@/images/projectImages/KidzClub/KidzClub.jpg"

export const Projects: Project[] = [
  {
    Title: "KIDZ CLUB",
    Description: `"KIDZ CLUB" is an AI-powered app designed to create a safe, educational, and engaging digital space for children while enabling parental supervision. It offers Kidz Mode with features like brain-boosting activities, educational content, gaming, e-commerce, and social connections, while Parent Mode includes screen time control, video recommendations, virtual meetups, and customized shopping. With AI-driven behavior analysis, a virtual teacher, and creative tools, the app helps children learn, play, and develop essential skills for an AI-driven world.`,
    Date: "February , 2025",
    Image: [
      KidzClub1
    ],
    Link: "https://kidzz-club.vercel.app/",
    TechStack: ["NextJS", "Tailwind CSS", "TypeScript", "MongoDB","OpenAI"],
    StarRating: [1, 1, 1, 1, 1],
  },
  {
    Title: "MEGHANA ELECTRONICS",
    Description: "A Website for expert TV repairing technician",
    Date: "December , 2024",
    Image: [
      MeghanaElectronics1,
      MeghanaElectronics2,
      MeghanaElectronics3,
      MeghanaElectronics4,
      MeghanaElectronics5,
    ],
    Link: "https://www.meghanaelectronics.com/",
    TechStack: ["NextJS", "Tailwind CSS", "TypeScript", "Cloudinary"],
    StarRating: [1, 1, 1, 1, 1],
  },
  {
    Title: "ZUPER-MART-ASSISTANT",
    Description:
      "It can assist you regarding the products sold in zuper mart(a fictional super market)",
    Date: "December , 2024",
    Image: [ZuperMart1, ZuperMart2, ZuperMart3, ZuperMart4, ZuperMart5],
    Link: "https://zuper-mart-assistant.vercel.app/",
    TechStack: ["NextJS", "Tailwind CSS", "TypeScript", "OpenAI", "Datastax"],
  },
  {
    Title: "F1-GPT",
    Description: "Ask it anything about Formula One Racing car",
    Date: "November , 2024",
    Image: [Gpt1, Gpt2, Gpt3, Gpt4],
    Link: "https://f1-gpt-delta.vercel.app/",
    TechStack: ["NextJS", "Tailwind CSS", "TypeScript", "OpenAI", "Datastax"],
  },
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
