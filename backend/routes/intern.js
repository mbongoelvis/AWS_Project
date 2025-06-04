const express = require('express');
const router = express.Router();
const InternController = require("../controllers/intern");
const verifyToken = require("../verifyToken"); // Import the verifyToken middleware

// Apply verifyToken to all intern routes
router.get('/:id', verifyToken, InternController.getIntern);
router.get('/', verifyToken, InternController.getAllIntern);
router.put('/:id', verifyToken, InternController.updateIntern);
router.delete('/:id', verifyToken, InternController.deleteIntern);

module.exports = router;