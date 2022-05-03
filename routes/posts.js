var express = require('express');
var router = express.Router();
var Post = require('../models/postModel');

router.get('/', async function (req, res, next) {
  const posts = await Post.find()
  res.status(200).json({
    "status": "success",
    "posts": posts
  })
});

module.exports = router;
