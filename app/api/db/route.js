import { NextResponse } from "next/server";
import Post from "@/models/Post";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";

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
  const session = await getServerSession(options);
  if(session){
    const id = session.user.email.split('@')[0];
    try {
      const data = await req.json();
      await mongoose.connect(process.env.MONGO);

      const isPresent = await Post.findOneAndUpdate({ id: id }, data);

      if (!isPresent) {
        const post = await Post.create(data);
        await post.save();
      }

      fetch(`${process.env.HOST}/api/revalidate`);

      return new NextResponse(JSON.stringify(data), { status: 201 });
    } catch (err) {
      return new NextResponse(err.message, { status: 500 });
    }
  } else {
    return new NextResponse("Unauthorised", { status: 401 });
  }
}