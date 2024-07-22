import express from 'express';
import cors from 'cors';
import userRouter from './routers/user.js'; // Add the .js extension
import { connectDB } from './config/db.js'; // Add the .js extension
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to database
connectDB(process.env.DB_URI);

// Route
app.use('/api', userRouter);

// Export the app for Vercel to call the listen method
export const viteNodeApp = app;
export default app;
