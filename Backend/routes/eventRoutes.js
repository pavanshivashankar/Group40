import express from "express";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import { createEvent, getAllEvents, deleteEventById, getEventById , updateEventById} from "../controllers/eventController.js";

const router = express.Router();

router.post("/", createEvent);
router.get("/", getAllEvents);
router.get("/:id",  getEventById);
router.put("/:id", updateEventById);
router.delete("/:id",  deleteEventById);

export default router;
