const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


function arrayLimit(val) {
    return val.length <= 10;
}

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide first name'],
        minLength: 1,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: [true, 'Please provide last name'],
        minLength: 1,
        maxLength: 30
    },
    username: {
        type: String,
        required: [true, 'Please provide username'],
        minLength: 4,
        maxLength: 30,
        unique: true
    },
    passwordHash: {
        type: String,
        required: [true, 'Please provide password'],
        minLength: 6
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please provide phone number'],
        maxLength: 20,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide valid email'
        ],
        unique: true
    },
    age: {
        type: Number,
        required: [true, 'Please provide age'],
        min: 18,
        max: 100
    },
    country: {
        type: String,
        required: [true, 'Please provide country'],
    },
    bio: {
        type: String
    },
    profilePhoto: {
        type: mongoose.Types.ObjectId,
        ref: 'Image'
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
            type: mongoose.Types.ObjectId,
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

UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10)
    this.passwordHash = await bcrypt.hash(this.passwordHash, salt)
    next()
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({userId: this._id, name: this.username}, process.env.JWT_SECRET , {expiresIn: process.env.JWT_LIFETIME})
}
UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.passwordHash)
    return isMatch
}

module.exports = mongoose.model('User', UserSchema)