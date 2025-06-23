const express = require('express');
const router = express.Router();
const db = require('../models')
const auth = require('../auth')

const SupplierService = require('../services/supplierService');
const SupplierController = require('../controllers/supplierController');

const supplierService = new SupplierService(db.Suppliers);
const supplierController = new SupplierController(supplierService);

router.post('', async (req,res)=>{
    supplierController.createSupplier(req,res);
});

router.get('',async(req,res)=>{
    supplierController.findAllSuppliers(req,res);
})

router.get('/:id',async(req,res)=>{
    supplierController.getSupplierByPk(req,res);
})

router.post('/update',async(req,res)=>{
    supplierController.updateSupplier(req,res);
});

router.get('/verifyToken',auth.verifyToken);

module.exports = router;