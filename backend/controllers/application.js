const Application = require("../models/application");

const createApplication = async (req, res) => {

  const newApplication = await new Application({
    cv: req.body.cv,
    recommendation_letter: req.body.recommendation_letter,
    motivation_letter: req.body.motivation_letter,
    front_id: req.body.front_id,
    back_id: req.body.back_id,
    user_id: req.body.user_id
  });

  try {
    const data = await newApplication.save();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

//updated a Application
const updateApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Application have been updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

//delete a Application

const deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.status(200).json("Application have been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

//get a Application

const getApplication = async (req, res) => {
  const ApplicationId = req.params.id;
  try {
    const application = await Application.findById(ApplicationId);
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all Application

const getAllApplication = async (req, res) => {
  try {
    const application = await Application.find().sort({ createdAt: -1 });
    res.status(200).json(application);
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = {
  createApplication,
  updateApplication,
  deleteApplication,
  getApplication,
  getAllApplication,
};
