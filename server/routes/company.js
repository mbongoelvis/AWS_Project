const express = require('express');
const router = express.Router();
const CompanyController = require("../controllers/company")

router.post('/', CompanyController.CreateCompany);
router.get('/:id', CompanyController.getCompany);
router.get('/', CompanyController.getAllCompany);
router.put('/:id', CompanyController.updateCompany);
router.delete('/:id', CompanyController.deleteCompany);



module.exports = router;
