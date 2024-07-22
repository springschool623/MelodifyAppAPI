import mongoose from "mongoose"

export const connectDB = async (uri) => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000, // Increase timeout
            socketTimeoutMS: 45000,  // Increase socket timeout
        });
    } catch (error) {
        console.log(error)
    }
}