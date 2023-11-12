const mongoose = require("mongoose")

const CompanySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    CompanyName: {
      type: String,
      required: true
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", CompanySchema);
