import { NextResponse } from "next/server";
import Post from "@/models/Post";
import mongoose from "mongoose";

export const POST = async (req)=>{
    try {
        const userId = await req.json();
        await mongoose.connect(process.env.MONGO);
        const user = await Post.findOne({ id: userId });
        return new NextResponse(JSON.stringify(user), {status: 201});
    } catch (err) {
        return  new NextResponse(err, {status: 500});
    }
}