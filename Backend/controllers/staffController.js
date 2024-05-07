import Staff from "../models/staffModel.js";
import User from "../models/userModel.js";

const getStaffMembers = async (req, res) => {
  try {
    const staffMembers = await Staff.find();
    res.status(200).json(staffMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStaffMemberById = async (req, res) => {
  try {
    const staffMember = await Staff.findById(req.params.id);
    if (staffMember) {
      res.status(200).json(staffMember);
    } else {
      res.status(404).json({ message: "Staff member not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getShiftByUserId = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);

    const email = user.email;

    const shift = await Staff.findOne({ email });

    if (shift) {
      res.status(200).json(shift);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create
const createStaffMember = async (req, res) => {
  try {
    const { name, role, email, phoneNumber, shift } = req.body;

    if (!name || !role || !email || !phoneNumber || !shift) {
      return res.status(400).json({ message: "please fill the all fields" });
    }

    const existingStaff = await Staff.findOne({ email });

    if (existingStaff) {
      return res.status(400).json({ message: "Staff already exists" });
    }

    const newStaffMember = new Staff({
      name,
      role,
      email,
      phoneNumber,
      shift,
    });

    const createdStaffMember = await newStaffMember.save();

    if (createdStaffMember) {
      return res
        .status(200)
        .json({ message: "Staff member created successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStaffMember = async (req, res) => {
  try {
    const { name, role, email, phoneNumber, shift } = req.body;

    if (!name || !role || !email || !phoneNumber || !shift) {
      return res.status(400).json({ message: "please fill the all fields" });
    }

    const staffMember = await Staff.findById(req.params.id);

    if (staffMember) {
      staffMember.name = name;
      staffMember.role = role;
      staffMember.email = email;
      staffMember.phoneNumber = phoneNumber;
      staffMember.shift = shift;

      const updatedStaffMember = await staffMember.save();
      if (updatedStaffMember) {
        return res
          .status(200)
          .json({ message: "Staff member updated successfully" });
      }
    } else {
      res.status(404).json({ message: "Staff member not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateShift = async (req, res) => {
  try {
    const { shift } = req.body;

    if (!shift) {
      return res.status(400).json({ message: "Please provide the shift" });
    }

    const staffMember = await Staff.findById(req.params.id);

    if (staffMember) {
      staffMember.shift = shift;

      const updatedStaffMember = await staffMember.save();
      if (updatedStaffMember) {
        return res
          .status(200)
          .json({ message: "Staff member's shift updated successfully" });
      }
    } else {
      res.status(404).json({ message: "Staff member not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteStaffMember = async (req, res) => {
  try {
    const staffMember = await Staff.findByIdAndDelete(req.params.id);
    if (staffMember) {
      res.status(200).json({ message: "Staff member deleted successfully" });
    } else {
      res.status(404).json({ message: "Staff member not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTotalRoleStrength = async (req, res) => {
  try {
    const roleCounts = await Staff.aggregate([
      { $group: { _id: "$role", count: { $sum: 1 } } },
    ]);
    res.status(200).json(roleCounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getStaffMembers,
  getStaffMemberById,
  createStaffMember,
  updateStaffMember,
  deleteStaffMember,
  getShiftByUserId,
  updateShift,
  getTotalRoleStrength,
};
