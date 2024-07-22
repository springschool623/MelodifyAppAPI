import express from "express"
import { addUser, deleteUser, getProducts, getUserById, updateUser } from "../controller/user";

const router = express.Router();

router.get('/users', getProducts)

router.get('/users/:id', getUserById)

router.post('/users', addUser)

router.put('/users', updateUser)

router.delete('/users', deleteUser)

export default router;