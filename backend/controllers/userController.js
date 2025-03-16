const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Counter = require("../models/counterModel");

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// Initialize counters if they don't exist
const initializeCounters = async () => {
  const roles = ["student", "teacher"];
  for (const role of roles) {
    await Counter.findOneAndUpdate(
      { _id: role },
      { $setOnInsert: { seq: 0 } },
      { upsert: true, new: true }
    );
  }
};

// Call initialization when the module loads
initializeCounters().catch(console.error);

// Generate User ID
const generateUserId = async (role) => {
  try {
    // Find and update counter
    const counter = await Counter.findOneAndUpdate(
      { _id: role },
      { $inc: { seq: 1 } },
      { new: true }
    );

    if (!counter) {
      throw new Error("Counter not found");
    }

    const prefix = role === "student" ? "S-" : "T-";
    return `${prefix}${counter.seq.toString().padStart(3, "0")}`;
  } catch (error) {
    console.error("Error generating userId:", error);
    throw error;
  }
};

// @desc    Register new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if username exists
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Generate unique user ID
    const userId = await generateUserId(role);
    console.log("Generated userId:", userId); // Debug log

    // Create user
    const user = await User.create({
      userId,
      username,
      email,
      password,
      role,
    });

    if (user) {
      console.log("Created user:", user); // Debug log
      res.status(201).json({
        _id: user._id,
        userId: user.userId,
        username: user.username,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(400).json({ message: error.message });
  }
};

// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check for user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // If both checks pass, send success response
    res.json({
      _id: user._id,
      userId: user.userId,
      username: user.username,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
