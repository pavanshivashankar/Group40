import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import { getAllAnimalMessages, getAnimalMessageById, createAnimalMessage, deleteAnimalMessage} from '../controllers/animalMessageController.js';

const router = express.Router();

router.post('/', protect, createAnimalMessage);
router.get('/', protect, getAllAnimalMessages);
// router.get('/:id', protect, isAdmin, getFeedbackById);
// router.put('/:id', protect, isAdmin, updateFeedback);
router.delete('/:id', protect, deleteAnimalMessage);

export default router;
