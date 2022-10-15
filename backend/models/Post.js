const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: [true, 'Please provide type']
    },
    type: {
        type: String,
        enum: {
            values: ['travel', 'host'],
            message: '{VALUE} type does not exist!',
        },
        required: true
    },
    title: {
        type: String,
        required: true,
        maxLength: 30,
        minLength: 5,

    },
    description: {
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