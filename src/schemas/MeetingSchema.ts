"use client"
 
import { z } from "zod"

export const MeetingSchema = z.object({
    PreferredDate:z.string(),
    PreferredTime:z.string(),
})