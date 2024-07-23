import express from "express";
import { getFavPlayLists, getFavPlayListById, addFavPlayList, deleteFavPlayList } from "../controller/favPlayList.js";
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware để xác thực người dùng
const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN); // Thay 'your_jwt_secret' bằng secret thực tế của bạn
        req.userId = decoded.id; // Gán userId từ token đã giải mã vào request
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// Lấy tất cả playlist yêu thích của người dùng
router.get('/fav-playlists', authenticateUser, getFavPlayLists);

// Lấy playlist yêu thích theo ID
router.get('/fav-playlists/:id', authenticateUser, getFavPlayListById);

// Thêm playlist yêu thích mới
router.post('/fav-playlists', authenticateUser, addFavPlayList);

// Xóa playlist yêu thích
router.delete('/fav-playlists/:id', authenticateUser, deleteFavPlayList);

export default router;
