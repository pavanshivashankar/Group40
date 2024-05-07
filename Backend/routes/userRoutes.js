import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import { registerUser, loginUser, getUsers, getUserById, updateUser, deleteUser , getUserByUserId, logout} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/logout', logout);
router.post('/login', loginUser);
router.get('/', protect, getUsers);
router.get('/byUserId', protect, getUserByUserId);
router.get('/:id', protect, getUserById);
router.put('/:id', protect, isAdmin, updateUser);
router.delete('/:id', protect, isAdmin, deleteUser);

export default router;
