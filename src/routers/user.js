import express from 'express';
import { getUsers, getUserById, addUser, deleteUser, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', addUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

export default router;
