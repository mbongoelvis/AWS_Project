const mongoose =  require("mongoose")

const ApplicationSchema = new mongoose.Schema(
  {
    cv: {
      type: String,
      required: true,
    },
    recommendation_letter: {
      type: String,
      required: true,
    },
    motivation_letter: {
      type: String,
      required: true,
    },
    front_id: {
      type: String,
      required: true,
    },
    back_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", ApplicationSchema);
