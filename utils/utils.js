const Post = require('../models/postModel');

const handleParam = (data) => {
    let newData = {};
    Object.keys(Post.schema.tree).forEach(field => {
        if (data[field])
            newData = { ...newData, [field]: data[field] }
    });
    return newData;
}

const showPosts = async (res, data) => {
    const posts = await Post.find();
    res.status(200).json({
        "status": "success",
        "posts": data ? data : posts
    })
}

module.exports = { handleParam, showPosts };