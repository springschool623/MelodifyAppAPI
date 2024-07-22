import express from 'express';
import userRouter from './routers/user';
import { connectDB } from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const cors = require("cors")

app.use(cors())

// Middleware để parse JSON
app.use(express.json());

// Kết nối database
connectDB(process.env.DB_URI);

// Route
app.use('/api', userRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export const viteNodeApp = app;
