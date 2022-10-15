const mongoose = require('mongoose')

const ImgSchema = new mongoose.Schema({
    name: String,
    img: {
        data: Buffer,
        contentType: String,
    }
});

module.exports = mongoose.model('Image', ImgSchema)