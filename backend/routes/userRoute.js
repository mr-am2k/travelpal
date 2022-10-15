const express = require('express')
const router = express.Router()
const {getAllUsers, getUser, editUser} = require('../controllers/userController')

router.get('/', getAllUsers)
router.route('/:id').get(getUser).patch(editUser)


module.exports = router