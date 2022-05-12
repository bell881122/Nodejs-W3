var express = require('express');
var router = express.Router();
const PostController = require('../controllers/postController');

router.get('/post/:id', PostController.getPost);
router.post('/post/', PostController.addPost);
router.delete('/post/:id', PostController.deletePost);
router.patch('/post/:id', PostController.updatePost);
router.get('/posts/', PostController.getPosts);
router.delete('/posts/', PostController.deletePosts);

module.exports = router;