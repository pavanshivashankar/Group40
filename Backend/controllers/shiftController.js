// shiftController.js
import Shift from "../models/shiftModel.js";

const getShifts = async (req, res) => {
  try {
    const shifts = await Shift.find();
    res.status(200).json(shifts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getShiftById = async (req, res) => {
  try {
    const shift = await Shift.findById(req.params.id);
    if (shift) {
      res.status(200).json(shift);
    } else {
      res.status(404).json({ message: "Shift not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getShiftByUserId = async (req, res) => {
  try {
    const userId = req.userId;
    const shift = await Shift.findById(userId);
    console.log(shift);

    if (shift) {
      res.status(200).json(shift);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createShift = async (req, res) => {
  const { staff, date, startTime, endTime } = req.body;
  const newShift = new Shift({
    staff,
    date,
    startTime,
    endTime,
  });

  try {
    const createdShift = await newShift.save();
    res.status(201).json(createdShift);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateShift = async (req, res) => {
  try {
    const { staff, date, startTime, endTime } = req.body;
    const shift = await Shift.findById(req.params.id);

    if (shift) {
      shift.staff = staff;
      shift.date = date;
      shift.startTime = startTime;
      shift.endTime = endTime;

      const updatedShift = await shift.save();
      res.status(200).json(updatedShift);
    } else {
      res.status(404).json({ message: "Shift not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteShift = async (req, res) => {
  try {
    const shift = await Shift.findById(req.params.id);
    if (shift) {
      await shift.remove();
      res.status(200).json({ message: "Shift removed" });
    } else {
      res.status(404).json({ message: "Shift not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getShifts,
  getShiftById,
  createShift,
  updateShift,
  deleteShift,
};
