import { NextResponse } from "next/server";
import Post from "@/models/Post";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
import connection from "@/utils/db";

export async function GET() {
    try {
      await connection();
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
      const newData = {...data, id: id, year: Number.parseInt(id[3])};
      await connection();

      const isPresent = await Post.findOneAndUpdate({ id: id }, newData);

      if (!isPresent) {
        const post = await Post.create(newData);
        await post.save();
      }

      fetch(`${process.env.HOST}/api/revalidate`);

      return new NextResponse(JSON.stringify(newData), { status: 201 });
    } catch (err) {
      return new NextResponse(err.message, { status: 500 });
    }
  } else {
    return new NextResponse("Unauthorised", { status: 401 });
  }
}