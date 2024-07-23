import FavPlayList from '../model/favPlayList.js';

// Lấy tất cả playlist yêu thích của người dùng
export const getFavPlayLists = async (req, res) => {
    try {
        const playlists = await FavPlayList.find({ userId: req.userId });
        res.status(200).json(playlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Lấy playlist yêu thích theo ID
export const getFavPlayListById = async (req, res) => {
    try {
        const playlist = await FavPlayList.findById(req.params.id);
        if (!playlist) return res.status(404).json({ message: "Playlist not found" });
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm playlist yêu thích mới
export const addFavPlayList = async (req, res) => {
    const { spotifyId, name, description, tracks, images, owner, snapshot_id } = req.body;
    const newPlaylist = new FavPlayList({
        userId: req.userId,
        playlists: [{ spotifyId, name, description, tracks, images, owner, snapshot_id }]
    });

    try {
        await newPlaylist.save();
        res.status(201).json(newPlaylist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Xóa playlist yêu thích
export const deleteFavPlayList = async (req, res) => {
    try {
        const playlist = await FavPlayList.findById(req.params.id);
        if (!playlist) return res.status(404).json({ message: "Playlist not found" });
        await playlist.remove();
        res.status(200).json({ message: "Playlist deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
