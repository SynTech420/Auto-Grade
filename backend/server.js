const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

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
app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;

// Connect to MongoDB with retry mechanism
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
