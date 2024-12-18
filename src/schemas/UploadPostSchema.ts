"use client"
import { z } from "zod"

export const UploadPostSchema = z.object({
    Title:z.string(),
    Content:z.string(),
    SubHeading:z.string(),
    Category:z.string(),
    Password:z.string(),
})