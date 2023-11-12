const express = require('express');
const router = express.Router();
const InternController = require("../controllers/intern")

router.get('/:id', InternController.getIntern);
router.get('/', InternController.getAllIntern);
router.put('/:id', InternController.updateIntern);
router.delete('/:id', InternController.deleteIntern);


module.exports = router;
