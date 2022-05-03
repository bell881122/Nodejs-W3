var express = require('express');
var router = express.Router();
const PostController = require('../controllers/postController');

router.get('/', PostController.getPosts);
router.post('/', PostController.addPosts);
router.delete('/', PostController.deletePosts);
router.delete('/:id', PostController.deletePost);
router.patch('/:id', PostController.updatePost);

module.exports = router;