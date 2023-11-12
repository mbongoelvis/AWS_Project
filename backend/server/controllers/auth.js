const Intern = require("../models/intern");
const Company = require("../models/company");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CreateInter = async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10);

  console.log(req.body)

  const newUser = await new Intern({
    email: req.body.email,
    password: hashPassword,
    isVerified: false,
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    profile:
      "https://firebasestorage.googleapis.com/v0/b/crown-ff1d9.appspot.com/o/profile%2Fboy-dynamic-premium.png?alt=media&token=f7840aa6-621b-4e8a-a899-7e7102330f40",
  });

  try {
    const data = await newUser.save();
    res.status(201).json({email : req.body.email, password : req.body.password, mymessage : 'Account created successfully!'});
  } catch (error) {
    res.status(500).json({
      mymessage: 'Account Already exist!'
    });
  }
};


const Login = async (req, res) => {
  const LoginEmail = req.body.email;
  const LoginPassword = req.body.password;
  console.log(req.body)
  try {
    currentUser = await Intern.findOne({ email: LoginEmail.toLowerCase()});
    storedPassword = currentUser?.password;
    if (!currentUser) {
      res.status(200).json({ mymessage: "Can't find "+req.body.email, error : true });
    } else if (await bcrypt.compare(LoginPassword, storedPassword)) {
      console.log("logged In!!");
      res.status(201).json({error : false,email : req.body.email, name : currentUser.fullName,  mymessage : 'Welcome '+currentUser.fullName});

    } else {
      console.log("invalid");
      res.json({ mymessage: "invalid credentials.", error : true });
    }
  } catch (error) {
     res.json({mymessage : "An error occured!",error : true })
  }
};
const LoginCompnay = async (req, res) => {
  const LoginEmail = req.body.email;
  const LoginPassword = req.body.password;
  try {
    currentCompany = await Company.findOne({ email: LoginEmail.toLowerCase()});
    storedPassword = currentCompany?.password;
    if (!currentCompany) {
      res.status(200).json({ mymessage: "Can't find "+req.body.email, error : true });
    } else if (await bcrypt.compare(LoginPassword, storedPassword)) {
      console.log("logged In!!");
      res.status(201).json({error : false,email : req.body.email, name : currentCompany.CompanyName,  mymessage : 'Welcome '+currentCompany.CompanyName});
    } else {
      console.log("ivalid");
      res.json({ mymessage: "invalid credentials.", error : true });
    }
  } catch (error) {
    res.json({mymessage : "An error occured!",error : true })
  }
};


module.exports = {
  CreateInter,
  Login,
  LoginCompnay
};
