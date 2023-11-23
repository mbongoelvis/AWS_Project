const Intern = require("../models/intern");
const bcrypt = require("bcrypt");



//updated a Intern
const updateIntern = async (req, res) => {
    if (req.body.password) {
      try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      } catch (error) {
        res.status(500).json(error);
      }
    }
    if (req.body.email) {
      req.body.isVerified = false;
    }
    try {
      const intern = await Intern.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Intern have been updated");
    } catch (error) {
      res.status(500).json(error);
    }
};

//delele a Intern

const deleteIntern = async (req, res) => {
  try {
    await Intern.findByIdAndDelete(req.params.id);
    res.status(200).json("Intern have been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

//get a Intern

const getIntern = async (req, res) => {
  const InternId = req.params.id;
  try {
    const intern = await Intern.findById(InternId);
    res.status(200).json(intern);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all Intern

const getAllIntern = async (req, res) => {
  try {
    const intern = await Intern.find().sort({ createdAt: -1 });
    res.status(200).json(intern);
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = {
  updateIntern,
  deleteIntern,
  getIntern,
  getAllIntern,
};
