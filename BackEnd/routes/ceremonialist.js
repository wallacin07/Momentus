var express = require('express');
var router = express.Router();
//Implementar as dependencias para o funcionamento da classe User
const db =require('../models') // carregando o banco de dados
const auth = require('../auth')

//Carregando as classes service e controller da user
const CeremonialistService = require('../services/ceremonialistService');
const CeremonialistController = require('../controllers/ceremonialistController');
const req = require('express/lib/request');

//Construir os objetos a partir das classes
const ceremonialistService = new CeremonialistService(db.User);
const ceremonialistController = new CeremonialistController(ceremonialistService);

//Rota para registrar novo usuário
router.post('/newUser', async (req,res)=>{
    ceremonialistController.createUser(req,res);
});

router.get('/AllUsers',auth.verifyToken,async(req,res)=>{
    ceremonialistController.findAllUsers(req,res);
})

router.get('/GetByPk',async(req,res)=>{
    ceremonialistController.getByPk(req,res);
})

router.post('/login',async(req,res)=>{
    ceremonialistController.login(req,res);
});

router.get('/verifyToken',auth.verifyToken);

module.exports = router;
