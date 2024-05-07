import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import { createShift, getShifts, getShiftById, updateShift, deleteShift} from '../controllers/shiftController.js';

const router = express.Router();

router.post('/', protect, isAdmin, createShift);
router.get('/', protect, isAdmin, getShifts);
// router.get('/shiftByUserId', protect, getShiftByUserId);
router.get('/:id', protect, isAdmin, getShiftById);
router.put('/:id', protect, isAdmin, updateShift);
router.delete('/:id', protect, isAdmin, deleteShift);

export default router;
