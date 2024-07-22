import express from "express";
import { addUser, deleteUser, getUsers, getUserById, updateUser } from "../controller/user_controller.js"; // Thêm đuôi .js

const router = express.Router();

// Lấy tất cả người dùng
router.get('/users', getUsers);

// Lấy người dùng theo ID
router.get('/users/:id', getUserById);

// Thêm người dùng mới
router.post('/users', addUser);

// Cập nhật người dùng
router.put('/users/:id', updateUser);

// Xóa người dùng
router.delete('/users/:id', deleteUser);

export default router;
