const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth')


router.post('/intern/', AuthController.CreateInter);
router.post('/company/', AuthController.CreateCompany);
router.post('/post/', AuthController.CreatePost);
router.post('/login', AuthController.Login);
router.post('/company/login', AuthController.LoginCompnay);


module.exports = router;
