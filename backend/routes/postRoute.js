const express = require('express')
const router = express.Router()
const {getPosts, addPost, deletePosts, deletePost, editPost} = require('../controllers/postController')

router.route('/').get(getPosts).post(addPost).delete(deletePosts)
router.route('/:postID').delete(deletePost).patch(editPost)

module.exports = router