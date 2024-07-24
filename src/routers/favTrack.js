import express from "express";
import { getTracksByUserEmail, addTrack } from "../controller/favTrack.js"; // Thêm đuôi .js

const router = express.Router();

// Get tracks by user email
router.get('/tracks/:email', getTracksByUserEmail);

// Add a new track
router.post('/tracks', addTrack);

// Delete all tracks
router.delete('/tracks', deleteAllTracks);

// Get all tracks
router.get('/tracks', getAllTracks);

export default router;
