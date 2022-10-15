const express = require('express')
const router = express.Router()
const {getBlogs, addBlog, deleteBlogs, deleteBlog} = require('../controllers/blogController')

router.get('/', getBlogs)
router.post('/', addBlog)
router.delete('/', deleteBlogs)

router.delete('/:blogID', deleteBlog)

module.exports = router