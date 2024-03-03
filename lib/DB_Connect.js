import mongoose from "mongoose";

const DB_Connect = async () => {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(process.env.DB_URI);
}

export default DB_Connect;