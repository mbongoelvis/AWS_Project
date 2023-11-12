const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth')


router.post('/', AuthController.CreateInter);
router.post('/login', AuthController.Login);
router.post('/company/login', AuthController.LoginCompnay);


module.exports = router;
