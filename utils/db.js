import { connect } from "mongoose";

export default async function connection() {
    try {
        connect(process.env.MONGO);
    } catch (error) {
        throw new Error('failed to connect to mongoDB');
    }
}