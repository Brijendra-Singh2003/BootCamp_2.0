export { default } from "next-auth/middleware"

export const config = { matcher: ["/profile", "/students/:path*", "/api/db", "/api/db/:path*"] }