var express = require('express');
var router = express.Router();
const db =require('../models');

const ProductService = require('../services/productService');
const ProductController = require('../controllers/productController');
const req = require('express/lib/request');

const productService = new ProductService(db.Product);
const productController = new ProductController(productService);

router.post('/', async (req,res)=>{
    productController.createProduct(req,res);
});

router.get('/',async(req,res)=>{
    productController.allProduct(req,res);
})

router.put('/',async(req,res)=>{
    productController.updateProduct(req,res);
})

router.delete('/',async(req,res)=>{
    productController.deleteProduct(req,res);
})

module.exports = router;