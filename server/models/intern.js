const mongoose =  require("mongoose")

const InternSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required : true,
      unique : true
    },
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required : true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Intern", InternSchema);
