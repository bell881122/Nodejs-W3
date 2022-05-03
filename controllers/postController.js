var Post = require('../models/postModel');
var handleError = require('../utils/handleError');
var { handleParam, showPosts } = require('../utils/utils');

const getPosts = (req, res) => {
    showPosts(res);
}

const addPosts = async (req, res) => {
    let data = handleParam(req.body);
    const post = await Post.create(data)
        .catch(err => handleError(err, res));
    showPosts(res, post);
}

const deletePosts = async (req, res) => {
    await Post.deleteMany({})
        .then(result => showPosts(res))
        .catch(err => handleError(err, res));
}

const deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
        .then(result => showPosts(res))
        .catch(err => handleError(err, res));
}

const updatePost = async (req, res) => {
    let data = handleParam(req.body);
    const post = await Post.findByIdAndUpdate(req.params.id, data)
        .then(result => showPosts(res))
        .catch(err => handleError(err, res));
}

module.exports = {
    getPosts,
    addPosts,
    deletePosts,
    deletePost,
    updatePost
}