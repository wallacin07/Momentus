const Client = require("../models/clients");
const ClientService = require("../services/clientService");

module.exports = class ClientController {
    constructor(ClientService) {
        this.ClientService = ClientService;
    }

    async createClient(req, res) {
        try {
            const { name, email, password, CPF, birthDate, adress, number } = req.body;
            const ceremonialistId = req.user.id;
            const newClient = await this.ClientService.create(name, email, password, CPF, birthDate, adress, number, ceremonialistId);
            newClient.dataValues.password = '';
            res.status(200).json(newClient);
        }
        catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ error: 'Ocorreu um erro ao gravar o novo usuário.' });
        }
    }

    async findAllClient(req, res) {
        try {
            const AllUsers = await this.ClientService.findAll();
            res.status(200).json(AllUsers);
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ error: 'Ocorreu um erro.' });
        }
    }

    async getClientByPk(req, res) {
        let id = req.params['id'];
        console.log(req.query.Pk);
        try {
            const user = await this.ClientService.getByPk(id);
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res
                .status(500)
                .json({ error: 'Ocorreu um erro.' });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;
        try {
            const User = await this.ClientService.login(email, password);
            res.status(200).json(User);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao logar!!" });
        }
    }

    async verifyToken(req, res) {
        const token = req.headers['authorization'];
        try {
            const user = await this.ClientService.verifyToken(token);
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao verificar o token!!" });
        }
    }

    async searchByName(req, res) {
        const name = req.body.name;
        try {
            const users = await this.ClientService.searchByName(name);
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erro ao buscar clientes!!" });
        }
    }
}