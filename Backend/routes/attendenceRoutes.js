import express from "express";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import { takeAttendanceForSelf , getAttendanceData} from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/", protect, takeAttendanceForSelf);
router.get("/",  getAttendanceData);
// router.get("/:id",  getEventById);
// router.put("/:id", updateEventById);
// router.delete("/:id",  deleteEventById);

export default router;