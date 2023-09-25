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
                return profile.email_verified && (
                    provider === "iiit-bh.ac.in" && 
                    ( id[1] === '1' ||
                    id === 'b222032' ||
                    id === 'b322020' ||
                    id === 'b422001' ||
                    id === 'b322037' ||
                    id === 'b522034' ||
                    id === 'b422019' ||
                    id === 'b322035' ||
                    id === 'b322029' ||
                    id === 'b222010' ||
                    id === 'b322006'));
            }
            return;
        },
    }
}