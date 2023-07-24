import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { CredentialsProvider } from "next-auth/providers";

let name = "b122041@iiit-bh.ac.in";

export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        // CredentialsProvider({
        //     name: "credentials",
        //     credentials: {
        //         usename: {
        //             label: "username",
        //             type: "text",
        //             placeholder: "username..."
        //         },
        //         password: {
        //             label: "password",
        //             type: "password",
        //             placeholder: "password..."
        //         },
        //     },
        //     async authorize(credentials) {
        //         const user = { id: "41", name: "birju", password: "password"};

        //         if(credentials && ( credentials.username === user.name && credentials.password === user.password ) ) {
        //             return user;
        //         }

        //         return null;
        //     }
        // })
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                return profile.email_verified && (profile.email.endsWith("@iiit-bh.ac.in") && name.charAt(1) === '1');
            }
            return false // Do different verification for other providers that don't have `email_verified`
        },
    }
}