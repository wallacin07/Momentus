const db = require('../models');
const auth = require('../auth');
const bcrypt = require('bcrypt');

module.exports = class ClientService {
    constructor(ClientModel) {
        this.Client = ClientModel;
    }

    async create(name, email, password, CPF, birthDate, adress, number, ceremonialistId) {
        const hash = await bcrypt.hash(password, parseInt(10));
        const newClient = await this.Client.create({
            name: name,
            email: email,
            password: hash,
            CPF: CPF,
            birthDate: birthDate,
            adress: adress,
            number: number,
            ceremonialistId: ceremonialistId
        });
        return newClient;
    }

    async findAll() {
        const allClient = await this.Client.findAll({
            attributes: ['id', 'name', 'email', 'CPF', 'birthDate', 'adress'],
        });
        return allClient;
    }

    async getByPk(pk) {
        const currClient = await this.Client.findByPk(pk);
        currClient.dataValues.password = '';
        return currClient;
    }

    async login(email, password) {
        let token = '';
        const curr = await this.Client.findOne({
            where: { email: email }
        });
        if (curr) {
            if (await bcrypt.compare(password, curr.password)) {
                curr.dataValues.password = '';
                token = await auth.generateToken(curr);
            } else {
                throw new Error("Senha invalida");
            }
        }
        return token;
    }
}