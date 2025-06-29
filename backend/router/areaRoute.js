const express = require('express')
const { addArea, readarea } = require('../controler/areaController')

const router = express.Router()

router.post('/',addArea)
router.get('/allArea',readarea)

module.exports = router