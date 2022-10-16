const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema ({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide UserId']
    },
    date: {
        type: Date,
        required: [true, 'Please provide date'],
        min: new Date().toISOString().slice(0, 10),
        default: new Date().toISOString().slice(0, 10)
    },
    title: {
        type: String,
        required: [true, 'Please provide title'],
        minLength: [5, 'Title is too short'],
        maxLength: [30, 'Title is too long']
    },
    content: {
        type: String
    },
    numberOfLikes:[{
        userID:{
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    }],
    comments: [{
        userID: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        text: {
            type: String,
            required: [true, 'Comment can not be empty'],
            maxlength: [500, 'Comment is too long']
        }
    }],
    photos: [{
        type: String
    }]
})

module.exports = mongoose.model('Blog', BlogSchema)