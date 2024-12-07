"use client"

import {  z } from "zod"

export const registerSchema = z.object({
  username:z.string(),
  email: z.string().email({message:"This email is not supported !"}),
  password:z.string().min(4,{message:"This password is easy"}),
  passwordVerify:z.string().min(4,{message:"This password is easy"}),
  remember:z.boolean()
})
