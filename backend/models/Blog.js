const mongoose = require('mongoose')


const BlogSchema = new mongoose.Schema ({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide UserId']
    },
    date: {
        type: Date,
        required: [true, 'Please provide date']
    },
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30
    },
    content: {
        type: String
    },
    numberOfLikes: {
        type: Number
    },
    comments: [{
        userID: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        text: {
            type: String,
            required: true,
            maxlength: 500
        }
    }],
    photos: [{
        type: mongoose.Types.ObjectId,
        ref: 'Image'
    }]
})

module.exports = mongoose.model('Blog', BlogSchema)