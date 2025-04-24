var express = require('express');
var router = express.Router();
const db =require('../models');
const auth = require('../auth');


const CartService = require('../services/cartService');
const CartController = require('../controllers/cartController');

const cartService = new CartService(db.Cart,db.CartProduct,db.Product);
const cartController = new CartController(cartService);

router.post('/add',auth.verifyToken,async (req,res)=>{
    cartController.addCart(req,res);
});

router.delete('/remove',auth.verifyToken,async (req,res)=>{
    cartController.deleteCart(req,res);
});

router.get('/',auth.verifyToken,async (req,res)=>{
    cartController.GetCart(req,res);
});

module.exports = router;