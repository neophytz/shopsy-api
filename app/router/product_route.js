const express  = require('express');
const Router = express.Router();
const product_controller =require('../controller/prooduct_controller') 

Router.post('/createProd', product_controller.createProduct)
Router.get('/getprod', product_controller.getProdItem)

module.exports = Router