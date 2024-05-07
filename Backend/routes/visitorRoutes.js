import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import { createVisitor, getVisitors, getVisitorById, updateVisitor, deleteVisitor } from '../controllers/visitorController.js';

const router = express.Router();

router.post('/', createVisitor);
router.get('/', protect, isAdmin, getVisitors);
router.get('/:id', protect, isAdmin, getVisitorById);
router.put('/:id', protect, isAdmin, updateVisitor);
router.delete('/:id', protect, isAdmin, deleteVisitor);

export default router;
