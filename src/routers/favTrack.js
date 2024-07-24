import express from "express";
import { getTracksByUserEmail, addTrack } from "../controller/favTrack.js"; // Thêm đuôi .js

const router = express.Router();

// Get tracks by user email
router.get('/tracks/:email', getTracksByUserEmail);

// Add a new track
router.post('/tracks', addTrack);

export default router;
