const User = require("../models/User")
const {StatusCodes} = require('http-status-codes')
const registerUser = async (req,res) => {
    const user = await User.create(req.body)
    const {...returnObject} = user._doc
    delete returnObject.passwordHash 
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: returnObject, token })
}

const loginUser =  (req,res) => {
    res.send('radi')
}

module.exports = {registerUser, loginUser}