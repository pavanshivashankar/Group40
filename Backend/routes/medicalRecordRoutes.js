import express from 'express';
import { protect, isAdmin } from '../middleware/authMiddleware.js';
import { createMedicalRecord, getMedicalRecords,getAllMedicalRecordById, getCurrentMedicalRecordById, getMedicalRecordById, updateMedicalRecord, deleteMedicalRecord } from '../controllers/medicalRecordController.js';

const router = express.Router();

// protect, isAdmin,
router.post('/:id',  createMedicalRecord);
router.get('/', protect, isAdmin, getMedicalRecords);
router.get('/:id', getMedicalRecordById);
router.get('/current/:id', getCurrentMedicalRecordById);
router.get('/all/:id', getAllMedicalRecordById);
router.put('/:id', updateMedicalRecord);
router.delete('/:id', deleteMedicalRecord);

export default router;
