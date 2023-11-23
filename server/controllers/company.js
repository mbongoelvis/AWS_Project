const Company = require("../models/company");
const bcrypt = require("bcrypt")

const CreateCompany = async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10);

  const newCompany = await new Company({
    email: req.body.email,
    password: hashPassword,
    CompanyName: req.body.companyName,
  });

  try {
    const data = await newCompany.save();
    res.status(201).json({email : req.body.email, password : req.body.password, mymessage : 'Account created successfully!'});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
        mymessage: 'Account Already exist!'
   });
  }
};

//updated a Company
const updateCompany = async (req, res) => {
  try {
    if (req.body.password) {
      try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
      } catch (error) {
        res.status(500).json(error);
      }
    }
    const company = await Company.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Company have been updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

//delete a Company

const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(200).json("Company have been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

//get a Company

const getCompany = async (req, res) => {
  const CompanyId = req.params.id;
  try {
    const company = await Company.findById(CompanyId);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all Company

const getAllCompany = async (req, res) => {
  try {
    const company = await Company.find().sort({ createdAt: -1 });
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = {
  CreateCompany,
  updateCompany,
  deleteCompany,
  getCompany,
  getAllCompany,
};
