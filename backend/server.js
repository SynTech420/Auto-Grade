const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

// Load env vars
dotenv.config();

// Verify environment variables
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

// Initialize or update counters
const initializeCounters = async (Counter) => {
  const roles = ["student", "teacher"];
  for (const role of roles) {
    await Counter.findOneAndUpdate(
      { _id: role },
      { $setOnInsert: { seq: 0 } },
      { upsert: true, new: true }
    );
  }
  console.log("Counters initialized/updated");
};

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Initialize collections and indexes
    const Counter = require("./models/counterModel");
    const User = require("./models/userModel");

    // Create indexes
    await User.collection.createIndex({ userId: 1 }, { unique: true });
    console.log("User indexes created successfully");

    // Initialize counters without dropping the collection
    await initializeCounters(Counter);

    // Start server
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
