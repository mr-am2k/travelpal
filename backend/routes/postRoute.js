const express = require('express')
const router = express.Router()
const {getPosts, addPost, deletePosts, deletePost} = require('../controllers/postController')

router.get('/', getPosts)
router.post('/', addPost)
router.delete('/', deletePosts)

router.delete('/:postID', deletePost)

module.exports = router