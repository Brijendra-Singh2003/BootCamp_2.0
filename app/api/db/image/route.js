import { NextRequest, NextResponse } from "next/server";
import Image from "@/models/Image";
import connection from "@/utils/db";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";

/**
 * @param {NextRequest} req 
 * @param {NextResponse} res  
 */
export async function GET(req, res) {
  const id = req.nextUrl.searchParams.get("id");
    try {
      await connection();
      const user = await Image.findOne({id: id});
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
      const newData = {...data, id: id};
      await connection();

      const isPresent = await Image.findOneAndUpdate({ id: id }, newData);

      if (!isPresent) {
        const img = await Image.create(newData);
        await img.save();
      }

      return new NextResponse(JSON.stringify(newData), { status: 201 });
    } catch (err) {
      return new NextResponse(err.message, { status: 500 });
    }
  } else {
    return new NextResponse("Unauthorised", { status: 401 });
  }
}