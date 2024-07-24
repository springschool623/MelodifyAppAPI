import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
    userEmail: {
        type: String, 
        required: true,
        unique: true
    },
    trackID: {
        type: String,
        required: true
    },
    trackName: {
        type: String, 
        required: true
    },
    artists: {
        type: String,
        required: true
    },
    trackImage: {
        type: String,
        required: true
    }
});

export default mongoose.model("Track", trackSchema);
