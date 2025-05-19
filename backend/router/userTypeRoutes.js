const express =  require('express')
const { addusertype, getUsertype, readusertypes } = require('../controler/userTypeController')
const router = express.Router()

router.post('/',addusertype)
router.get('/getUsertypes',getUsertype)
router.get('/readUsertypes',readusertypes)

module.exports = router