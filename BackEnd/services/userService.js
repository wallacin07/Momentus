// ./services/userService.js

const db = require('../models');
const auth = require('../auth');
const bcrypt = require('bcrypt');

var round_salts=10;

class UserService{
    constructor(UserModel){
        this.User = UserModel;
    }
    
    async create(email, data_nasc, password){
        try{
            console.log(password);
            const hash = await bcrypt.hash(password,parseInt(round_salts));
            const newUser = await this.User.create({
                email:email,
                dataNasc:data_nasc,
                password:hash
            });
            return newUser? newUser : null;
        }
        catch (error){
            throw error;
        }
    }

    async findAll(){
        try{
            const allUsers = await this.User.findAll({
                attributes:['id','email','dataNasc','createdAt','updatedAt']
            });
            return allUsers?allUsers:null;
        }
        catch(error){
            throw error;
        }
    }

    async getByPk(pk){
        try{
            const user = await this.User.findByPk(pk);
            return user?user:null;
        }catch(error){
            throw error;
        }
    }
    async login(email,password){
        try{
            console.log(password);
            const User = await this.User.findOne({
                where:{email:email}
            });
            if(User){
                if(await bcrypt.compare(password,User.password)){
                    User.dataValues.Token = await auth.generateToken(User);
                    User.dataValues.password = '';
                }else{
                    throw new Error("Senha invalida");
                }
            }
            return User?User:null
        }catch(error){
            throw(error)
        }
    }
}

module.exports = UserService;