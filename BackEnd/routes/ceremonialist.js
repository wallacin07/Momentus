const express = require('express');
const router = express.Router();
const db =require('../models')
const auth = require('../auth')
const req = require('express/lib/request');

const CeremonialistService = require('../services/ceremonialistService');
const CeremonialistController = require('../controllers/ceremonialistController');

const ceremonialistService = new CeremonialistService(db.Ceremonialist);
const ceremonialistController = new CeremonialistController(ceremonialistService);

router.post('', async (req,res)=>{
    ceremonialistController.createCerimonialist(req,res);
});

router.get('',async(req,res)=>{
    ceremonialistController.findAllCerimonialist(req,res);
})

router.get('/:id',async(req,res)=>{
    ceremonialistController.getCerimonialistByPk(req,res);
})

router.post('/login',async(req,res)=>{
    ceremonialistController.login(req,res);
});

router.get('/verifyToken',auth.verifyToken);

module.exports = router;
