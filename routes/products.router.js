const express = require('express')
const {GetProducts, GetProductsByID ,AddProducts }= require('../controllers/products')
const router = express.Router()

// router.get('/products',GetProducts)
router.get('/products/:id',GetProductsByID)
// router.post('/products',AddProducts) 
//****simpifier les 2 routes dans une seul line
router.route('/products').get(GetProducts).post(AddProducts)

module.exports= router