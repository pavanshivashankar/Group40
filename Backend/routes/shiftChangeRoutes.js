import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import { createShiftChange, getAllShiftChanges, getShiftChangeById, deleteShiftChange } from '../controllers/shiftChangeController.js';

const router = express.Router();

router.post('/', protect, createShiftChange);
router.get('/', protect, getAllShiftChanges);
router.get('/:id', protect, getShiftChangeById);
// router.put('/:id', protect, isAdmin, updateFeedback);
router.delete('/:id', protect, deleteShiftChange);

export default router;