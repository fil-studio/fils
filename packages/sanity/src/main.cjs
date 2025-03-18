const { getCustomQuery, getPage, getPosts, deletePost, slugify } = require("./api.js");
const { imageUrl, imageRatio } = require("./image.js");

module.exports = {
    getCustomQuery,
    getPage,
    getPosts,
    deletePost,
    slugify,
    imageUrl,
    imageRatio
}