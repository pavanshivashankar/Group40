import ShiftChange from "../models/shiftChangeModel.js";
import staffModel from "../models/staffModel.js";
import userModel from "../models/userModel.js";

// Get all shift changes
const getAllShiftChanges = async (req, res) => {
  try {
    const shiftChanges = await ShiftChange.find();
    res.status(200).json(shiftChanges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get shift change by ID
const getShiftChangeById = async (req, res) => {
  const { id } = req.params;
  try {
    const shiftChange = await ShiftChange.findOne({staff:id});
    if (!shiftChange) {
      return res.status(404).json({ message: "Shift change not found" });
    }
    res.status(200).json(shiftChange);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new shift change
const createShiftChange = async (req, res) => {
  try {
    const { shift, reason } = req.body;

    const staff = req.userId;

    const user = await userModel.findById(staff);

    const email = user.email;

    const findStaff = await staffModel.findOne({email});

    const staffId = findStaff._id

    if (!shift || !reason) {
      return res
        .status(400)
        .json({ message: "Please fill all the required fields" });
    }

    const newShiftChange = new ShiftChange({ staff: staffId, shift, reason });
    const saveShift = await newShiftChange.save();
    if (saveShift) {
      return res
        .status(200)
        .json({ message: "Shift request sent successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update shift change by ID
export const updateShiftChange = async (req, res) => {
  const { id } = req.params;
  const { staff, shift, reason } = req.body;
  try {
    const shiftChange = await ShiftChange.findById(id);
    if (!shiftChange) {
      return res.status(404).json({ message: "Shift change not found" });
    }
    shiftChange.staff = staff;
    shiftChange.shift = shift;
    shiftChange.reason = reason;
    await shiftChange.save();
    res.status(200).json(shiftChange);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete shift change by ID
const deleteShiftChange = async (req, res) => {
  const { id } = req.params;
  const shiftId = await ShiftChange.findOne({staff:id})

  console.log(shiftId)
  try {
    const shiftChange = await ShiftChange.findByIdAndDelete(shiftId);
    if (!shiftChange) {
      return res.status(404).json({ message: "Shift change not found" });
    }
    res.status(200).json({ message: "Shift change deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createShiftChange, getAllShiftChanges, getShiftChangeById , deleteShiftChange};
