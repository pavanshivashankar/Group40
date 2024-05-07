import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import { createFeedback, getFeedback, getFeedbackById, updateFeedback, deleteFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/', protect, createFeedback);
router.get('/', protect, getFeedback);
router.get('/:id', protect,  getFeedbackById);
router.put('/:id', protect, updateFeedback);
router.delete('/:id', protect, isAdmin, deleteFeedback);

export default router;
