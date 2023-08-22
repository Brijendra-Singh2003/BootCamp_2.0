import { NextResponse } from "next/server";
import Post from "@/models/Post";
import mongoose from "mongoose";
import { options } from "./../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export async function GET(req) {
//   const session = await getServerSession(options);
//   if (session) {
    try {
      await mongoose.connect(process.env.MONGO);
      const userId = req.nextUrl.searchParams.get("id");

      if (userId) {
        const user = await Post.findOne({ id: userId });
        return new NextResponse(JSON.stringify(user), { status: 201 });
      } else {
        return new NextResponse('id querry missing', { status: 400 });
      }
    } catch (err) {
      return new NextResponse(err.message, { status: 500 });
    } finally {
      mongoose.disconnect();
    }
//   } else {
//     return new NextResponse("Access denied", { status: 401 });
//   }
}

export async function POST(req) {
//   const session = await getServerSession(options);
//   if (session) {
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
    } finally {
      mongoose.disconnect();
    }
//   } else {
//     return new NextResponse("Access denied", { status: 401 });
//   }
}
