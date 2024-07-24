import Track from '../model/favTrack.js'; // Adjust the import path to your actual model location

// Get tracks by user email
export const getTracksByUserEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const tracks = await Track.find({ userEmail: email });
        res.status(200).json(tracks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new track
export const addTrack = async (req, res) => {
    const { userEmail, trackID, trackName, artists } = req.body;

    const newTrack = new Track({
        userEmail,
        trackID,
        trackName,
        artists,
        trackImage,
    });

    try {
        await newTrack.save();
        res.status(201).json(newTrack);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
