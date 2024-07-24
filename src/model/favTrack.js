import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
    trackID: {
        type: String,
        required: true
    },
    userEmail: {
        type: String, 
        required: true,
        unique: false,
        index: false // Explicitly state that this field should not be indexed uniquely
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
