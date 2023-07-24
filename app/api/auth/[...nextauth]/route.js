import NextAuth from "next-auth/next"
import { options } from "./options";

const handler = NextAuth(options);
// export const GET = handler;
// export const POST = handler;

export { handler as GET, handler as POST }