var express = require('express');
var router = express.Router();
const PostController = require('../controllers/postController');

router.get('/:id', PostController.getPost);
router.post('/', PostController.addPost);
router.delete('/:id', PostController.deletePost);
router.patch('/:id', PostController.updatePost);

module.exports = router;