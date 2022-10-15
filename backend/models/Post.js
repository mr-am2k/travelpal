const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    type: {
        type: String,
        enum: {
            values: ['travel', 'host'],
            message: '{VALUE} type does not exist!'
        }
    },
    title: {
        type: String,
        required: true,
        maxLength: 30,
        minLength: 5
    },
    descripton: {
        type: String,
    },
    destination: {
        type: String,
        required: true
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
})

module.exports = mongoose.model('Post', PostSchema)