import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.BETTER_AUTH_URI);
const db = client.db("tiles-gallery");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        autoSignIn: false
    },
    database: mongodbAdapter(db, { client }),

    // Social Provider
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});