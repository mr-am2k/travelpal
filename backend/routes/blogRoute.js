const express = require('express')
const router = express.Router()
const {getBlogs, addBlog, deleteBlogs, deleteBlog, editBlog} = require('../controllers/blogController')

router.route('/').get(getBlogs).post(addBlog).delete(deleteBlogs)
router.route('/:blogID').delete(deleteBlog).patch(editBlog)

module.exports = router