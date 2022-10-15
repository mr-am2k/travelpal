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
    numberOfLikes:[{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
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
        type: String
    }]
})

module.exports = mongoose.model('Blog', BlogSchema)