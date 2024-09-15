'use server'

import dbConnect from "@/lib/dbConnect"

export const SendMessage = async ({}) => {
  await dbConnect()
}
