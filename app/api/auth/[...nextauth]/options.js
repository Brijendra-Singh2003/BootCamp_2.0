import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            const [id, provider] = profile.email.split('@');
            if (account.provider === "google") {
                return profile.email_verified && ( provider === "iiit-bh.ac.in" && id.charAt(1) === '1' && id.charAt(3)!=='3');
            }
            return;
        },
    }
}