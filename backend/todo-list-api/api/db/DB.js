import mongoose from "mongoose";

const connectDB = async() => {
    try {
        if(mongoose.connections[0].readyState) return
        await mongoose.connect(process.env.MONGODB_URL);
        // success log
        console.log("Database connected successfully!");
    } catch (error) {
        console.log("MongoDB Error: ", error);
    }
}

export default connectDB