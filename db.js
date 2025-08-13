import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar las variables del .env

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(">>>>> DB is connected");
    } catch (error) {
        console.error(error);
    }
};
