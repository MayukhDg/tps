"use server"

import { NextResponse } from "next/server";
import User from "../database/models/user";
import { connectToDB } from "../database/mongoose";

export const fetchUser = async(clerkId)=>{
   try {
     await connectToDB();
     const user = await User.findOne({clerkId});
     return NextResponse.json(user,{status:201}) 
   } catch (error) {
    console.log(error);
   }
}


export const createUser = async({name, image, id})=>{
  try {
    await connectToDB();
    const newUser = await User.create({
     name, image, clerkId:id
    })
    return NextResponse.json(newUser, {status:201})
  } catch (error) {
    console.log(error);
  }
}