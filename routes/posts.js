var express = require('express');
var router = express.Router();
var Post = require('../models/postModel');
var handleError = require('../utils/handleError');
var { handleParam, showPosts } = require('../utils/utils');

router.get('/', async function (req, res, next) {
  showPosts(res);
});

router.post('/', async function (req, res, next) {
  let data = handleParam(req.body);
  const post = await Post.create(data)
    .catch(err => handleError(err, res));
  showPosts(res, post);
});

router.delete('/', async function (req, res, next) {
  await Post.deleteMany({})
    .then(result => showPosts(res))
    .catch(err => handleError(err, res));
});

router.delete('/:id', async function (req, res, next) {
  await Post.findByIdAndDelete(req.params.id)
    .then(result => showPosts(res))
    .catch(err => handleError(err, res));
});

router.patch('/:id', async function (req, res, next) {
  let data = handleParam(req.body);
  const post = await Post.findByIdAndUpdate(req.params.id, data)
    .then(result => showPosts(res))
    .catch(err => handleError(err, res));
});

module.exports = router;