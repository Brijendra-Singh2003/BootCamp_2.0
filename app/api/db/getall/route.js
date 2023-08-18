import { NextResponse } from "next/server";
import Post from "@/models/Post";
// import connection from "@/utils/db";
import mongoose from "mongoose";

export const GET = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        const users = await Post.find();
        return new NextResponse(JSON.stringify(users), {status: 201});
    } catch (err) {
        return  new NextResponse(err, {status: 500});
    } finally {
        mongoose.disconnect();
    }
}

// export {foo as GET, foo as POST}