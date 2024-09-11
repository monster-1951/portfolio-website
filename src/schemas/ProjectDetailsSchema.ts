"use client"
import { z } from "zod"

export const ProjectDetailsSchema = z.object({
    ProjectDescription:z.string(),
    ProjectGoals:z.string(),
    TargetAudience:z.string(),
    ExistingWebsite:z.string(),
    DesiredFeatures:z.string(),
    TimeLine:z.string(),
    Budget:z.number(),
    isContentAvailable:z.boolean()
})