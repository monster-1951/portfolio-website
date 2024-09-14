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
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolorum nam tenetur, perspiciatis autem sequi pariatur totam dolorem sit reprehenderit debitis voluptas officia repellat provident veniam quae ut nostrum. Aperiam, iure. Neque repudiandae repellendus rem debitis nostrum. Deserunt, saepe nostrum. Molestiae exercitationem ut totam dignissimos? Nemo dolores optio fugiat cum!",
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
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolorum nam tenetur, perspiciatis autem sequi pariatur totam dolorem sit reprehenderit debitis voluptas officia repellat provident veniam quae ut nostrum. Aperiam, iure. Neque repudiandae repellendus rem debitis nostrum. Deserunt, saepe nostrum. Molestiae exercitationem ut totam dignissimos? Nemo dolores optio fugiat cum!",
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
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolorum nam tenetur, perspiciatis autem sequi pariatur totam dolorem sit reprehenderit debitis voluptas officia repellat provident veniam quae ut nostrum. Aperiam, iure. Neque repudiandae repellendus rem debitis nostrum. Deserunt, saepe nostrum. Molestiae exercitationem ut totam dignissimos? Nemo dolores optio fugiat cum!",
      Image: [Recipe, Recipe2, Recipe3],
      Link: "https://monster-1951.github.io/RecipeFinder/",
      Date: "April , 2024",
      TechStack: ["React", "Tailwind CSS", "JavaScript", "BootStrap"],
    },
    {
      Title: "Weather",
      Description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod dolorum nam tenetur, perspiciatis autem sequi pariatur totam dolorem sit reprehenderit debitis voluptas officia repellat provident veniam quae ut nostrum. Aperiam, iure. Neque repudiandae repellendus rem debitis nostrum. Deserunt, saepe nostrum. Molestiae exercitationem ut totam dignissimos? Nemo dolores optio fugiat cum!",
      Image: [Weather, Weather1],
      Link: "https://monster-1951.github.io/Weather/",
      Date: "April , 2024",
      TechStack: ["React", "Tailwind CSS", "JavaScript", "BootStrap"],
    },
  ];