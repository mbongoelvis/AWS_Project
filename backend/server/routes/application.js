const express = require('express');
const router = express.Router();
const ApplicationController = require("../controllers/application")

router.post('/', ApplicationController.createApplication);
router.get('/:id', ApplicationController.getApplication);
router.get('/', ApplicationController.getAllApplication);
router.put('/:id', ApplicationController.updateApplication);
router.delete('/:id', ApplicationController.deleteApplication);


module.exports = router;
