import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("MongoDB connection failed")
        console.error(error.message)
        process.exit(1)
    }
}

export default connectDB