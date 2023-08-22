import { NextResponse } from "next/server";
import Post from "@/models/Post";
import mongoose from "mongoose";
import { options } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const GET = async ()=>{
    const session = await getServerSession(options);
    if (session) {
        return new NextResponse(JSON.stringify(session), {status: 200});
    } else {
        return new NextResponse('Access denied', {status : 401});
    }
}