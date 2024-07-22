import express from 'express';
import userRouter from './routers/user.js'; // Thêm đuôi .js
import { connectDB } from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware để parse JSON
app.use(express.json());

// Kết nối database
connectDB(process.env.DB_URI);

// Route
app.use('/api', userRouter);

const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Xuất named app
export const viteNodeApp = app;

export default server; // Xuất mặc định server
