import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel.js";
import Staff from "../models/staffModel.js";

dotenv.config();
const secretKey = process.env.JWT_SECRET_KEY;

const registerUser = async (req, res) => {
  const { userName, name, email, password, confirmPassword } = req.body;

  try {
    if (!userName || !name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "please fill the all fields" });
    }

    if (password != confirmPassword) {
      return res.status(400).json({ message: "Password do not match" });
    }

    const existingUser = await User.findOne({ userName });

    const existingUserByemail = await User.findOne({ email });

    if (existingUser !== null || existingUserByemail !== null) {
      return res.status(400).json({ message: "User already exists" });
    }

    const roleCheck = await Staff.findOne({ email });

    if (roleCheck !== null) {
      const newUser = new User({
        userName,
        name,
        email,
        password,
        role: roleCheck.role,
      });
      const savedUser = await newUser.save();
      if (savedUser) {
        return res
          .status(200)
          .json({ message: "You have registered successfully", savedUser });
      }
    } else {
      const newUser = new User({ userName, name, email, password });

      const savedUser = await newUser.save();
      if (savedUser) {
        return res
          .status(200)
          .json({ message: "You have registered successfully", savedUser });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found, please register" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generating token
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "10d",
    });

    // localStorage.setItem('auth-token', token)

    // Setting token as cookie
    res.cookie("auth-token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 864000000, // 10 days
    });

    res.status(200).json({ message: "You have logged in successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserByUserId = async (req, res) => {
  try {
    const userId = req.userId;

    console.log("hello");
    const user = await User.findById(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { userName, name, email, password, confirmPassword, role } = req.body;

    if (password != confirmPassword) {
      return res.status(400).json({ message: "Password do not match" });
    }
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.userName = userName;
    user.name = name;
    user.email = email;
    user.password = password;
    user.role = role;

    const updatedUser = await user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).json({ message: "User Deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// logout user
const logout= async (req, res) => {  
  console.log("logout hii")
  try {
      res.cookie("auth-token", "", {
        expiresIn: new Date(0)
      })
      console.log("cookies deleted");
      res.send()
  } catch (error) {
      console.error('Error logging out:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};




export {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByUserId,
  logout
};
