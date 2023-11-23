const express = require('express');
const router = express.Router();
const PostController = require("../controllers/post")

router.get('/:id', PostController.getPost);
router.get('/', PostController.getAllPost);
router.delete('/:id', PostController.deletePost);


module.exports = router;
