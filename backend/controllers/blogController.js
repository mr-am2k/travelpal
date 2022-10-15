const Blog = require("../models/Blog")
const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')

const getBlogs =  async (req,res) => {
    let Blogs = await Blog.find()
    if(!Blogs) {
        res.status(StatusCodes.NO_CONTENT).json({msg: 'No Blogs found'})
    }
    const test = Promise.all(Blogs.map(async(element) => {
        const userProfile = await User.findById(element.userID)
        const returnBlog = {...element._doc, userImage: userProfile.profilePhoto, username: userProfile.username}
        return returnBlog
    }))

    test.then((response) => res.status(StatusCodes.OK).json({response}))
}

const addBlog = async (req, res) =>{
    if(!req.body){
        res.status(StatusCodes.BAD_REQUEST).json({msg: 'Bad request'})
    }
    const newBlog = await Blog.create(req.body)
    res.status(StatusCodes.OK).json({msg: 'Blog saved successfully', blog: newBlog})
}

const deleteBlogs = async (req, res) =>{
    await Blog.deleteMany()
    res.status(StatusCodes.OK).json({msg: 'All blogs deleted'})
}

const deleteBlog = async (req, res) =>{
    if(!req.body){
        res.status(StatusCodes.BAD_REQUEST).json({msg: 'Bad request'})
    }
    await Blog.findByIdAndDelete(req.params.blogID)
    res.status(StatusCodes.OK).json({msg: 'Blog deleted successfully'})
}

module.exports = {getBlogs, addBlog, deleteBlogs, deleteBlog}