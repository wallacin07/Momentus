const db = require('../models');
const auth = require('../auth');
const bcrypt = require('bcrypt');

var round_salts = 10;

class CeremonialistService{
    constructor(CeremonialistModel){
        this.Ceremonialist = CeremonialistModel;
    }
    
    async create(name,email,password,CNPJ,birthDate,adress){
        const hash = await bcrypt.hash(password,parseInt(round_salts));
        const newCeremonialist = await this.Ceremonialist.create({
            name:name,
            email:email,
            password:hash,
            CNPJ:CNPJ,
            birthDate:birthDate,
            adress:adress,
        });
        return newCeremonialist;
    }

    async findAll(){
        const allCeremonialist = await this.Ceremonialist.findAll({
            attributes:['id','name','email','CNPJ','birthDate','adress'],
        });
        return allCeremonialist;
    }

    async getByPk(pk){
        const Ceremonialist = await this.Ceremonialist.findByPk(pk);
        Ceremonialist.dataValues.password = '';
        return Ceremonialist;
    }

    async login(email,password){
        let token = '';
        const curr = await this.Ceremonialist.findOne({
            where:{email:email}
        });
        if(curr){
            if(await bcrypt.compare(password,curr.password)){
                curr.dataValues.password = '';
                token = await auth.generateToken(curr);
            }else{
                throw new Error("Senha invalida");
            }
        }
        return token;
    }
}

module.exports = CeremonialistService;