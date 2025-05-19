const express = require('express')
const { createCountry, readCountry } = require('../controler/countryController')
const router = express.Router()

router.post('/',createCountry)
router.get('/allcountry',readCountry)

module.exports = router