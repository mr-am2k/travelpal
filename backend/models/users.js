const mongoose = require('mongoose')

const imgSchema = new mongoose.Schema({
    name: String,
    img: {
        data: Buffer,
        contentType: String,
    },
});

function arrayLimit(val) {
    return val.length <= 10;
}

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 30
    },
    username: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 30
    },
    passwordHash: {
        type: String,
        required: true,
        minLength: 6
    },
    phoneNumber: {
        type: String,
        required: true,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide valid email'
        ]
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100
    },
    country: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    profilePhoto: {
        type: imgSchema
    },
    interests: [{
        type: String,
        validate: [arrayLimit, '{PATH} exceeds the limit of 10']
    }],
    averageTravelRating: {
        type: Number,
        min: 1,
        max: 5
    },
    averageHostRating: {
        type: Number,
        min: 1,
        max: 5
    },
    reviews: [{
        userID: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        type: {
            type: String,
            enum: {
                values: ['travel', 'host'],
                message: '{VALUE} type does not exist!'
            }
        },
        comment: {
            type: String
        },
        rating: {
            type: Number,
            min: 1,
            max: 5
        }
    }]
})


module.exports = {User: mongoose.model('User', userSchema), Image: mongoose.model('Image', imgSchema)}