const express = require('express')
const ProductController = require('../controllers/ProductController')
const router = express.Router()
const Product = require('../models/Product')



router.post('/create',ProductController.create)


router.get('/getAll',ProductController.getAll)
router.get('/id/:_id',ProductController.getById)



router.delete('/id/:_id',ProductController.delete)


router.put('/id/:_id',ProductController.changeInformation)
router.put('/stockStatus/:_id',ProductController.changeStock)


module.exports = router