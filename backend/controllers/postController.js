const Post = require("../models/Post")
const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')

const getPosts =  async (req,res) => {
    let posts = await Post.find()
    if(!posts) {
        res.status(StatusCodes.NO_CONTENT).json({msg: 'No posts found'})
    }
    const test = Promise.all(posts.map(async(element) => {
        const userProfile = await User.findById(element.userID)
        let ratingCount
        let reviewStars
        if(typeof userProfile.reviews === 'undefined') ratingCount = 0
        else ratingCount = userProfile.reviews.length
        if(typeof userProfile.averageHostRating === 'undefined') reviewStars = 0
        else reviewStars = userProfile.averageHostRating
        const returnPost = {...element._doc, ratingCount: ratingCount,reviewStars: reviewStars}
        return returnPost
    }))

    test.then((response) => res.status(StatusCodes.OK).json({response}))
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

const editPost = async (req,res) => {
    const postDataToUpdate = req.body
    const postID = req.params.postID
    if(Object.keys(postDataToUpdate).length === 0){
        throw new BadRequestError('U need to provide data to update')
    }
    const updatedPost = await User.findOneAndUpdate({_id: postID}, postDataToUpdate, {new:true, runValidators:true} )
    if(!updatedPost) {
        throw new NotFoundError('Post does not exist')
    }
    res.status(StatusCodes.OK).json({updatedPost})
}

module.exports = {getPosts, addPost, deletePosts, deletePost, editPost}