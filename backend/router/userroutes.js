const express = require('express')
const { adduser } = require('../controler/userController')
const router = express.Router()

router.post('/',adduser)

module.exports = router