import { StaticImageData } from "next/image";
export interface Project{
    Title: string;
    Description: string;
    Image: StaticImageData[];
    Link: string;
    Date: string;
    TechStack: string[];
    Review?:string;
    StarRating?:Number[]
}