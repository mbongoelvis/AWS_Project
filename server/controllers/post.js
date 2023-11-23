const Post = require("../models/post")

//delele a post

const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post have been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

//get a post

const getPost = async (req, res) => {
  const PostId = req.params.id;
  try {
    const post = await Post.findById(PostId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all posts

const getAllPost = async (req, res) => {
  try {
    const post = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = {
  deletePost,
  getPost,
  getAllPost,
};
