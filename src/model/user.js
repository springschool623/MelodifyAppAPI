import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
    }
});

export default mongoose.model("User", userSchema);
