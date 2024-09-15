"use client";
import { z } from "zod";

export const ClientReachOutSchema = z.object({
    Name:z.string({required_error:"Your Good Name is required"}),
    Email:z.string({required_error:"Your email is required"}).email({message:"Please enter your email"}),
    Message:z.string({required_error:"Message is required"})
})