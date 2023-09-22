import mongoose from "mongoose";

export default async function connection() {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGO, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('connected to db');
        }
    } catch (error) {
        // throw new Error('Failed to connect to MongoDB');
    }
}
