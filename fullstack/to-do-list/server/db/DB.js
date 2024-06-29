
import mongoose from "mongoose";

const connectDB = async() => {
    try {

        // connections validation
        if (mongoose.connections[0].readyState) return;
        // connect to database
        await mongoose.connect(process.env.MONGOGB_URL);

        console.log("Database Successfully Connected!");
    } catch (error) {
        // log the error
        console.log( error);
    }
}

export default connectDB