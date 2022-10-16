const Blog = require('../models/Blog')
const {BadRequestError} = require('../errors')
const { StatusCodes } = require('http-status-codes')

const appendComment = async (req,res) => {
    const blogId = req.params.id 
    const userId = req.user.userId
    if(Object.keys(req.body).length === 0){
        throw new BadRequestError('U need to provide data to update')
    }
    const targetedBlog = await Blog.findById({_id:blogId})
    if(!targetedBlog){
        throw new NotFoundError('Blog does not exist')
    }
    targetedBlog.comments.push(req.body)
    console.log(targetedBlog)
    const updatedBlog = await Blog.findOneAndUpdate({_id:blogId}, targetedBlog,  {new:true, runValidators:true} )
    res.status(StatusCodes.OK).json({targetedBlog})
}

const deleteComment = async (req,res) => {

}

module.exports = {appendComment, deleteComment}