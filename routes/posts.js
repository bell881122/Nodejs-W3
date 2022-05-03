var express = require('express');
var router = express.Router();
var Post = require('../models/postModel');
var handleError = require('../utils/handleError');
var { handleParam } = require('../utils/utils');

router.get('/', async function (req, res, next) {
  const posts = await Post.find();
  res.status(200).json({
    "status": "success",
    "posts": posts
  })
});

router.post('/', async function (req, res, next) {
  let data = handleParam(req.body);
  const post = await Post.create(data).catch(err => handleError(err, res));
  res.status(200).json({
    "status": "success",
    "posts": post
  })
});

module.exports = router;
