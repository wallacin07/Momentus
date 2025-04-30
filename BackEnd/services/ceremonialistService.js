// ./services/userService.js

const db = require('../models');
const auth = require('../auth');
const bcrypt = require('bcrypt');

var round_salts = 10;

class CeremonialistService{
    constructor(CeremonialistModel){
        this.User = CeremonialistModel;
    }
    
    async create(name,description,email, data_nasc, password,adress){
        try{
            console.log(password);
            const hash = await bcrypt.hash(password,parseInt(round_salts));
            const newCeremonialist = await this.Ceremonialist.create({
                name:name,
                description:description,
                email:email,
                dataNasc:data_nasc,
                password:hash,
                adress:adress
            });
            return newCeremonialist? newCeremonialist : null;
        }
        catch (error){
            throw error;
        }
    }

    async findAll(){
        try{
            const allCeremonialist = await this.Ceremonialist.findAll({
                attributes:['id','name','description','email','dataNasc','adress','createdAt','updatedAt'],
            });
            return allCeremonialist?allCeremonialist:null;
        }
        catch(error){
            throw error;
        }
    }

    async getByPk(pk){
        try{
            const Ceremonialist = await this.Ceremonialist.findByPk(pk);
            return Ceremonialist?Ceremonialist:null;
        }catch(error){
            throw error;
        }
    }
    async login(email,password){
        try{
            const curr = await this.Ceremonialist.findOne({
                where:{email:email}
            });
            if(curr){
                if(await bcrypt.compare(password,curr.password)){
                    curr.dataValues.Token = await auth.generateToken(curr);
                    curr.dataValues.password = '';
                }else{
                    throw new Error("Senha invalida");
                }
            }
            return curr?curr:null
        }catch(error){
            throw(error)
        }
    }
}

module.exports = CeremonialistService;