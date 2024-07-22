import mongoose from "mongoose"

export const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000, // Tăng thời gian timeout nếu cần
            socketTimeoutMS: 45000, // Tăng thời gian socket timeout nếu cần
            connectTimeoutMS: 10000, // Tăng thời gian connect timeout nếu cần
        })
    } catch (error) {
        console.log(error)
    }
}