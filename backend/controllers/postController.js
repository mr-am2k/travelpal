const Post = require("../models/Post")
const {StatusCodes} = require('http-status-codes')

const getPosts =  async (req,res) => {
    const posts = await Post.find()
    if(!posts) {
        res.status(StatusCodes.NO_CONTENT).json({msg: 'No posts found'})
    }
    res.status(StatusCodes.OK).json(posts)
}

const addPost = async (req, res) =>{
    if(!req.body){
        res.status(StatusCodes.BAD_REQUEST).json({msg: 'Bad request'})
    }
    const newPost = Post.create(req.body)
    await newPost.save()
    res.status(StatusCodes.OK).json({msg: 'Post saved successfully'})
}

module.exports = {getPosts, addPost}