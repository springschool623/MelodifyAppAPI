import mongoose from "mongoose";

const favPlayListSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    playlists: [
        {
            spotifyId: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            description: {
                type: String
            },
            tracks: {
                type: Number
            },
            images: [
                {
                    url: {
                        type: String
                    },
                    height: {
                        type: Number
                    },
                    width: {
                        type: Number
                    }
                }
            ],
            owner: {
                type: String
            },
            snapshot_id: {
                type: String
            }
        }
    ]
});

export default mongoose.model("FavPlayList", favPlayListSchema);
