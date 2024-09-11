"use client";

import { z } from "zod";

const facebookProfileUrlRegex =
  /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9(\.\?)?]/;
const igProfileUrlRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9_]/;
const linkedinProfileReex =
  /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+/;
const twitterProfileRegex =
  /^(https?:\/\/)?(www\.)?twitter\.com\/[A-Za-z0-9_]+$/;

export const ClientSchema = z.object({
  Name: z.string({ required_error: "Name is required" }).min(3,{message:"Enter a valid name"}),
  Email: z.string().email({ message: "Enter a valid Email" }),
  MobileNumber: z
    .string()
    .length(10, { message: "Enter a valid Mobile Number" }),
  PreferredDate: z.string(),
  PreferredTime: z.string(),
  Company: z.string().optional(),
  Location: z.string({ required_error: "Enter the valid location" }),
  PreferredCommunication: z.string(),
  SocialMedia: z
    .string()
    .refine((value) => {
      return (
        facebookProfileUrlRegex.test(value) ||
        igProfileUrlRegex.test(value) ||
        linkedinProfileReex.test(value) ||
        twitterProfileRegex.test(value)
      );
    })
    .optional(),
});
