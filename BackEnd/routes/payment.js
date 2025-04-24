var express = require('express');
var router = express.Router();
const db = require('../models');
const auth = require("../auth");

const PaymentController = require("../controllers/paymentController");
const PaymentService = require("../services/paymentService");
const req = require('express/lib/request');

const productService = new PaymentService(db.Payment,db.Cart,db.CartProduct,db.Product);
const productController = new PaymentController(productService)

router.get('/status',auth.verifyToken,async (req,res)=>{
    productController.getPayment(req,res);
})

router.post('/credit-card',auth.verifyToken,async(req,res)=>{
    productController.createPaymentCredit(req,res);
});

router.post('/pix',auth.verifyToken,async(req,res)=>{
    productController.createPaymentPix(req,res);
});

module.exports = router;