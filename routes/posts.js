var express = require('express');
var router = express.Router();
const PostController = require('../controllers/postController');

router.get('/', PostController.getPosts);
router.delete('/', PostController.deletePosts);

module.exports = router;