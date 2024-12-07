"use client"

import {  z } from "zod"

export const loginSchema = z.object({
  email: z.string().email({message:"This email is not supported !"}),
  password:z.string().min(4,{message:"This password is easy"}),
  remember:z.boolean()
})
