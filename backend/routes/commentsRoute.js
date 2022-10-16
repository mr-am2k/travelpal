const express = require('express')
const router = express.Router()
const {appendComment, deleteComment} = require('../controllers/commentsController')

router.patch('/:id', appendComment)
router.delete('/:id', deleteComment)

module.exports = router