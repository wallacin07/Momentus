const ceremonialist = require("../models/ceremonialist");
const CeremonialistService = require("../services/ceremonialistService");

class CeremonialistController{
    
    constructor(CeremonialistService){
        this.CeremonialistService = CeremonialistService;
    }

    async createCerimonialist(req,res){
        
        //processar a request
        console.log(req.body)
        const {name,email,password,CNPJ,birthDate,adress} = req.body;

        try{
            const newCeremonialist = await this.CeremonialistService.create(name,email,password,CNPJ,birthDate,adress);
            res.status(200).json(newCeremonialist);
        }
        catch(error){
            console.log(error);
            res
                .status(500)
                .json({error: 'Ocorreu um erro ao gravar o novo usuário.'});
        }
    }
    async findAllCerimonialist(req,res){
        try{
            const AllUsers = await this.CeremonialistService.findAll();
            res.status(200).json(AllUsers);
        }catch(error){
            console.log(error);
            res
                .status(500)
                .json({error: 'Ocorreu um erro.'});
        }
    }

    async getCerimonialistByPk(req,res){
        let id = req.params['id'];
        console.log(req.query.Pk);
        try{
            const user = await this.CeremonialistService.getByPk(id);
            res.status(200).json(user);
        }catch(error){
            console.log(error);
            res
                .status(500)
                .json({error: 'Ocorreu um erro.'});
        }
    }

    async login(req,res){
        const {email,password} = req.body;
        try{
            const User = await this.CeremonialistService.login(email,password);
            res.status(200).json(User);
        }catch(error){
            console.log(error);
            res.status(500).json({error:"Erro ao logar!!"});
        }
    }
}

module.exports = CeremonialistController;