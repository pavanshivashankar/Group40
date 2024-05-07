import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import { createHabitat, getHabitats, getHabitatById, updateHabitat, deleteHabitat } from '../controllers/habitatController.js';

const router = express.Router();

router.post('/', protect, isAdmin, createHabitat);
router.get('/', getHabitats);
router.get('/:id', getHabitatById);
router.put('/:id', protect, isAdmin, updateHabitat);
router.delete('/:id', protect, isAdmin, deleteHabitat);

export default router;
