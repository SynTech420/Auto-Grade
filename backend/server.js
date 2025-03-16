const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const User = require("./models/userModel"); // Ensure this model exists
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

// Load env vars
dotenv.config();

// Verify environment variables
console.log("MongoDB URI:", process.env.MONGO_URI);
console.log("Environment Variables Loaded:", {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI ? "Found" : "Not Found",
  JWT_SECRET: process.env.JWT_SECRET ? "Found" : "Not Found",
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Server is running" });
});

// Routes
app.use("/api/users", userRoutes);

// Login endpoint to verify user credentials
app.post("/api/users/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found. Please register." });
    }

    // Verify password (assuming passwords are stored in plain text for simplicity)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Return user details (excluding sensitive information)
    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Connect to MongoDB with retry mechanism
const startServer = async () => {
  try {
    await connectDB();
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Create indexes after connection
    try {
      await User.collection.createIndex({ userId: 1 }, { unique: true });
      console.log("User indexes created successfully");
    } catch (error) {
      console.error("Error creating indexes:", error);
    }

    // Initialize collections and indexes
    const Counter = require("./models/counterModel");

    // Drop existing counters to start fresh
    try {
      await mongoose.connection.collection("counters").drop();
      console.log("Counters collection dropped");
    } catch (error) {
      console.log("No counters collection to drop");
    }

    // Create initial counters
    await Counter.create([
      { _id: "student", seq: 0 },
      { _id: "teacher", seq: 0 },
    ]);
    console.log("Counters initialized");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
