const express = require('express')
const { createLocations, allLocation } = require('../controler/locationController')
const router = express.Router()

router.post('/',createLocations)
router.get('/allLocation',allLocation)
module.exports = router