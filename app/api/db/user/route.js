import Post from "@/models/Post";
import connection from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

/**
 * @param {NextRequest} req 
 * @param {NextResponse} res  
 */
export async function GET(req, res) {
    const id = req.nextUrl.searchParams.get("id");
      try {
        await connection();
        const user = await Post.findOne({id: id});
        return new NextResponse(JSON.stringify(user), { status: 201 });
      } catch (err) {
        return new NextResponse(err.message, { status: 500 });
      }
  }