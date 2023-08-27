import { NextResponse } from "next/server";
import Post from "@/models/Post";
import mongoose from "mongoose";

export async function GET() {
    try {
      await mongoose.connect(process.env.MONGO);
      const user = await Post.find();
      return new NextResponse(JSON.stringify(user), { status: 201 });
    } catch (err) {
      return new NextResponse(err.message, { status: 500 });
    }
}

export async function POST(req) {
    try {
      const data = await req.json();
      await mongoose.connect(process.env.MONGO);

      const isPresent = await Post.findOneAndUpdate({ id: data.id }, data);

      if (!isPresent) {
        const post = await Post.create(data);
        await post.save();
      }
      return new NextResponse("data uploaded", { status: 201 });
    } catch (err) {
      return new NextResponse(err.message, { status: 500 });
    }
}