const User = require("../models/User")
const { StatusCodes } = require('http-status-codes')
const registerUser = async (req, res) => {  
    const user = await User.create(req.body)
    const { ...returnObject } = user._doc
    delete returnObject.passwordHash
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: returnObject, token })
}


const loginUser = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        throw new BadRequestError('Please provide email and password')
    }
    const user = await User.findOne({email})
    if(!user){
        throw new UnauthenticatedError('Invalid credentials')
    }
    const comparedPassword = await user.comparePassword(password)
    if(!comparedPassword){
        throw new UnauthenticatedError('Invalid password')
    }
    const token = user.createJWT();
    const { ...returnObject } = user._doc
    delete returnObject.passwordHash
    res.status(StatusCodes.OK).json({returnObject, token})
}

module.exports = { registerUser, loginUser }