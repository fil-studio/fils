const { configDotenv } = require("dotenv");
configDotenv();

const baseURL = `https://cdn.sanity.io/images/${process.env.SANITY_PROJECT_ID}/production`;

function imageUrl(image, width) {
    const parts = image.asset._ref.split('-');
    const oWidth = parseInt(parts[2].split('x')[0]);
    return `${baseURL}/${parts[1]}-${parts[2]}.${parts[3]}?w=${Math.min(width, oWidth)}&auto=format`;
}

function imageRatio(image) {
    const parts = image.asset._ref.split('-');
    const siz = parts[2].split('x');
    const oWidth = parseInt(siz[0]);
    const oHeight = parseInt(siz[1]);

    return oWidth / oHeight;
}

module.exports = {
    imageUrl,
    imageRatio
};