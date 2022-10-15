const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/userController')


router.route('/register').get()


module.exports = router