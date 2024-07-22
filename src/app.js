import express from 'express';
import userRouter from './routers/user'
import { connectDB } from './config/db';
import dotenv from "dotenv"

dotenv.config()
const app = express();

//middleware, không cần dùng bodyparse nữa
app.use(express.json());

//connect db
connectDB(process.env.DB_URI)

//routes
app.use('/api', userRouter)

export const viteNodeApp = app;