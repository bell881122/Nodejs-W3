var Post = require('../models/postModel');
var handleError = require('../utils/handleError');
var { handleParam, showPosts } = require('../utils/utils');

const getPosts = (req, res) => {
    showPosts(res);
}

const getPost = async (req, res) => {
    await Post.find({ _id: req.params.id })
        .then(result => {
            console.log("result", result)
            if (result === null || result.length === 0) {
                idError(res);
                return;
            }
            showPosts(res, result)
        })
        .catch(err => handleError(err, res));
}

const addPost = async (req, res) => {
    let data = handleParam(req.body);
    await Post.create(data)
        .then(result => showPosts(res, result))
        .catch(err => handleError(err, res));
}

const deletePosts = async (req, res) => {
    await Post.deleteMany({})
        .then(result => showPosts(res))
        .catch(err => handleError(err, res));
}

const deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
        .then(result => {
            if (result === null) {
                idError(res);
                return;
            }
            showPosts(res)
        })
        .catch(err => handleError(err, res));
}

const updatePost = async (req, res) => {
    let data = handleParam(req.body);
    console.log("data", data);
    await Post.findByIdAndUpdate(req.params.id, data, { runValidators: true })
        .then(result => {
            if (result === null) {
                idError(res);
                return;
            }
            showPosts(res)
        })
        .catch(err => handleError(err, res));
}

const idError = res => {
    handleError({ "message": "Id 有誤，請重新確認" }, res)
}

module.exports = {
    getPosts,
    getPost,
    addPost,
    deletePosts,
    deletePost,
    updatePost
}