const mongoose = require("mongoose");

const counterSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      enum: ["student", "teacher"],
    },
    seq: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    collection: "counters",
  }
);

// Ensure indexes
counterSchema.index({ _id: 1 }, { unique: true });

const Counter = mongoose.model("Counter", counterSchema);

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

// Initialize counters when the model is first loaded
initializeCounters().catch(console.error);

module.exports = Counter;
