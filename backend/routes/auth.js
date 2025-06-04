const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth')


router.post('/intern/', AuthController.createIntern);
router.post('/company/', AuthController.createCompany);
router.post('/login', AuthController.login);
router.post('/company/login', AuthController.companyLogin);


module.exports = router;
