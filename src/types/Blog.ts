import { Document } from "mongoose";

export interface Blog extends Document{
    Title:string,
    Hook:string,
    Category:string,
    Content:string,
    Media?:string,
}