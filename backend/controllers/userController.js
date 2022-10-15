const User = require('../models/User')
const {NotFoundError, BadRequestError} = require('../errors');
const { StatusCodes } = require('http-status-codes');


const getAllUsers = async (req,res) => {
    const users = await User.find();
    if(!users){
       res.status(StatusCodes.NO_CONTENT).json({msg:"Users collection is empty"})
    }
    res.status(StatusCodes.OK).json({users})
}

const getUser = async (req,res) => {
    const userId = req.params.id 
    const targetedUser = await User.findById({_id:userId})
    if(!targetedUser){
        throw new NotFoundError('There is no user with that id')
    }
    res.status(StatusCodes.OK).json({targetedUser})
} 

const editUser = async (req,res) => {
    const userDataToUpdate = req.body
    const userId = req.user.userId
    if(Object.keys(userDataToUpdate).length === 0){
        throw new BadRequestError('U need to provide data to update')
    }
    const updatedUser = await User.findOneAndUpdate({_id: userId}, userDataToUpdate, {new:true, runValidators:true} )
    if(!updatedUser) {
        throw new NotFoundError('User does not exist')
    }
    res.status(StatusCodes.OK).json({updatedUser})

}

module.exports = {getAllUsers, getUser, editUser}