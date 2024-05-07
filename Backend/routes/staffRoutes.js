import express from "express";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import {
  getStaffMembers,
  getStaffMemberById,
  createStaffMember,
  updateStaffMember,
  deleteStaffMember,
  getShiftByUserId,
  updateShift,
  getTotalRoleStrength
} from "../controllers/staffController.js";

const router = express.Router();

router.post("/", protect, createStaffMember);
router.get("/", protect, getStaffMembers);
router.get("/shiftByUserId", protect, getShiftByUserId);
router.get("/roleStrength",  getTotalRoleStrength);
router.get("/:id",  getStaffMemberById);
router.put("/:id", protect, updateStaffMember);
router.put("/shift/:id", protect, updateShift);
router.delete("/:id",  deleteStaffMember);

export default router;
