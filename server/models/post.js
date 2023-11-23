const mongoose =  require("mongoose")

const PostSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required : true,
    },
    author: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      require: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
