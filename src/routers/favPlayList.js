import express from "express";
import { getFavPlayLists, getFavPlayListById, addFavPlayList, deleteFavPlayList } from "../controller/favPlayList.js";

const router = express.Router();

// Middleware để xác thực người dùng (cần triển khai)
const authenticateUser = (req, res, next) => {
    // Giả sử xác thực thành công và gán userId
    req.userId = "exampleUserId"; // Thay bằng logic xác thực thực tế
    next();
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
