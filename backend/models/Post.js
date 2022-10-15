const mongoose = require('mongoose');
const { nextTick } = require('process');

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
        maxLength: [30, 'Title is too long'],
        minLength: [5, 'Title is too short'],
        default: null

    },
    description: {
        type: String,
        default: ''
    },
    destination: {
        type: String,
        required: [true, 'Please provide destination'],
        default: null
    },
    startDate: {
        type: Date,
        min: new Date().toISOString().slice(0, 10),
        default: new Date().toISOString().slice(0, 10)
    },
    endDate: {
        type: Date,
        min: new Date().toISOString().slice(0, 10),
        default:new Date().toISOString().slice(0, 10)
    },
    photos: [{
        type: String
    }]
})

module.exports = mongoose.model('Post', PostSchema)