const express = require('express');
const router = express.Router();
const db =require('../models')
const auth = require('../auth')
const req = require('express/lib/request');

const ClientService = require('../services/clientService');
const ClientController = require('../controllers/clientController');

const clientService = new ClientService(db.Client);
const clientController = new ClientController(clientService);

router.post('',auth.verifyToken, async (req,res)=>{
    clientController.createClient(req,res);
});

router.get('',async(req,res)=>{
    clientController.findAllClient(req,res);
});

router.get('/:id',async(req,res)=>{
    clientController.getClientByPk(req,res);
});

router.post('/login',async(req,res)=>{
    clientController.login(req,res);
});

router.get('/verifyToken',auth.verifyToken);

module.exports = router;
