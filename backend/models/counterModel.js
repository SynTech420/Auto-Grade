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
    versionKey: false, // Disable the version key
  }
);

// Ensure indexes
counterSchema.index({ _id: 1 }, { unique: true });

const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
