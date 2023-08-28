import { getServerSession } from "next-auth"
import { options } from "../../auth/[...nextauth]/options"
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const session = await getServerSession(options);
    return new NextResponse(JSON.stringify(session));
}