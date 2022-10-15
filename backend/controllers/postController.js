const Post = require("../models/Post")
const {StatusCodes} = require('http-status-codes')

const getPosts =  async (req,res) => {
    const posts = await Post.find()
    if(!posts) {
        res.status(StatusCodes.NO_CONTENT).json({msg: 'No posts found'})
    }
    posts.forEach(element =>{

    })
    res.status(StatusCodes.OK).json(posts)
}

const addPost = async (req, res) =>{
    if(!req.body){
        res.status(StatusCodes.BAD_REQUEST).json({msg: 'Bad request'})
    }
    const newPost = await Post.create(req.body)
    res.status(StatusCodes.OK).json({msg: 'Post saved successfully', post: newPost})
}

const deletePosts = async (req, res) =>{
    await Post.deleteMany()
    res.status(StatusCodes.OK).json({msg: 'All posts deleted'})
}

const deletePost = async (req, res) =>{
    if(!req.body){
        res.status(StatusCodes.BAD_REQUEST).json({msg: 'Bad request'})
    }
    await Post.findByIdAndDelete(req.params.postID)
    res.status(StatusCodes.OK).json({msg: 'Post deleted successfully'})
}

module.exports = {getPosts, addPost, deletePosts, deletePost}