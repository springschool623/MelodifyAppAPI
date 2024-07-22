import express from 'express';
import userRouter from './routers/user.js'; // Thêm đuôi .js
import { connectDB } from './config/db.js'; // Thêm đuôi .js
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware để parse JSON
app.use(express.json());

// Enable CORS
app.use(cors());

// Kết nối database
connectDB(process.env.DB_URI);

// Route
app.use('/api', userRouter);

// Xuất ứng dụng để nền tảng triển khai sẽ gọi phương thức listen
export const viteNodeApp = app;
export default app;
