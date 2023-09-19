export { default } from "next-auth/middleware"

export const config = { matcher: ["/" ,"/profile", "/students/:path*", "/societies", "/about"] }
