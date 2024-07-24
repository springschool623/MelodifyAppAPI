import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
    trackID: {
        type: String,
        required: true,
        unique: true,
    },
    userEmail: {
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

// Ensure the schema does not re-create unique indexes
trackSchema.index({ userEmail: 1 }, { unique: false });

export default mongoose.model("Track", trackSchema);