const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Intern = require("../models/intern");
const Company = require("../models/company");


// Function to generate a JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, userType: user.constructor.modelName }, // Payload
    process.env.JWT_SECRET, // Secret key (store in .env)
    { expiresIn: "1h" } // Options (expiration time)
  );
};

const createIntern = async (req, res) => {
  try {
    const { email, password, fullName, phoneNumber, profile } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create a new intern
    const newIntern = new Intern({
      email: email,
      password: hashPassword,
      isVerified: false,
      fullName: fullName,
      phoneNumber: phoneNumber,
      profile: null
    });

    // Save intern and respond
    const intern = await newIntern.save();

    // Generate a JWT
    const token = generateToken(intern);

    res.status(200).json({ intern, token }); // Send back the intern and the token
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
};

const createCompany = async (req, res) => {
  try {
    const { email, password, CompanyName } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create a new company
    const newCompany = new Company({
      email: email,
      password: hashPassword,
      isVerified: false,
      CompanyName: CompanyName,
     
    });

    // Save company and respond
    const company = await newCompany.save();

    // Generate a JWT
    const token = generateToken(company);

    res.status(200).json({ company, token }); // Send back the company and the token
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await Intern.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("user not found");
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json("wrong password");
    }

    // Generate a JWT
    const token = generateToken(user);

    res.status(200).json({ user, token }); // Send back the user and the token
  } catch (err) {
    res.status(500).json(err);
  }
};

const companyLogin = async (req, res) => {
  try {
    const company = await Company.findOne({ email: req.body.email });
    if (!company) {
      return res.status(404).json("user not found");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      company.password
    );
    if (!validPassword) {
      return res.status(400).json("wrong password");
    }

    // Generate a JWT
    const token = generateToken(company);

    res.status(200).json({ company, token }); // Send back the company and the token
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createIntern,
  createCompany,
  login,
  companyLogin,
};