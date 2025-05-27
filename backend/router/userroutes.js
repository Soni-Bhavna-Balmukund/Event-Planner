const express = require('express')
const { adduser, loginuser, AuthVerify } = require('../controler/userController')
const Auth = require('../middleware/authVerify')
const router = express.Router()

router.post('/',adduser)
router.post('/loginuser',loginuser)
router.post('/authverify',Auth,AuthVerify)

module.exports = router