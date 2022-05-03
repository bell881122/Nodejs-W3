const Post = require('../models/postModel');

const handleParam = (data) => {
    let newData = {};
    Object.keys(Post.schema.tree).forEach(field => {
        if (data[field])
            newData = { ...newData, [field]: data[field] }
    });
    return newData;
}

module.exports = { handleParam };