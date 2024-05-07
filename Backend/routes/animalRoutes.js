import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import { createAnimal, getAnimals, getAnimalById, updateAnimal, deleteAnimal } from '../controllers/animalController.js';

const router = express.Router();

// protect, isAdmin,
router.post('/',  createAnimal);
router.get('/', getAnimals);
router.get('/:id', getAnimalById);
router.put('/:id',  updateAnimal);
router.delete('/:id', deleteAnimal);

export default router;
