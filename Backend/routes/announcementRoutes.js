import express from "express";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import {createAnnouncement, getAllAnnouncements, getAnnouncementById, updateAnnouncementById, deleteAnnouncementById} from '../controllers/announcementController.js'

const router = express.Router();

router.post("/", createAnnouncement);
router.get("/", getAllAnnouncements);
router.get("/:id",  getAnnouncementById);
router.put("/:id", updateAnnouncementById);
router.delete("/:id",  deleteAnnouncementById);

export default router;
