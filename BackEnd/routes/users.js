var express = require('express');
var router = express.Router();
//Implementar as dependencias para o funcionamento da classe User
const db =require('../models') // carregando o banco de dados
const auth = require('../auth')

//Carregando as classes service e controller da user
const UserService = require('../services/userService');
const UserController = require('../controllers/userController');
const req = require('express/lib/request');

//Construir os objetos a partir das classes
const userService = new UserService(db.User);
const userController = new UserController(userService);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Módulo de usuários rodando.');
});

//Rota para registrar novo usuário
router.post('/newUser', async (req,res)=>{
  userController.createUser(req,res);
});

router.get('/AllUsers',auth.verifyToken,async(req,res)=>{
  userController.findAllUsers(req,res);
})

router.get('/GetByPk',async(req,res)=>{
  userController.getByPk(req,res);
})

router.post('/login',async(req,res)=>{
  userController.login(req,res);
});

router.get('/verifyToken',auth.verifyToken);

module.exports = router;
