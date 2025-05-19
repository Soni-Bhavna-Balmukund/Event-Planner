const express = require('express')
const { addcategory, readAllCategory } = require('../controler/businessCategoryController')
const router = express.Router()

router.post('/',addcategory)
router.get('/allBusinessCategory',readAllCategory)
module.exports = router