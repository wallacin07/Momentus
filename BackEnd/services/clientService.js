const db = require('../models');
const auth = require('../auth');
const bcrypt = require('bcrypt');

var round_salts = 10;

module.exports = class ClientService {
    constructor(ClientModel) {
        this.Client = ClientModel;
    }

    async create(name, email, password, CPF, birthDate, address, number, ceremonialistId) {
        const hash = await bcrypt.hash(password,parseInt(round_salts));
        const newClient = await this.Client.create({
            name,
            email,
            password: hash,
            CPF,
            birthDate,
            address,
            number,
            ceremonialistId
        });
        return newClient;
    }

    async findAll() {
        const allClient = await this.Client.findAll({
            attributes: ['id', 'name', 'email', 'CPF', 'birthDate', 'address','number', 'ceremonialistId'],
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

    async searchByName(name, limit = 10, offset = 0) {
        const currClient = await this.Client.findAll({
            where: {
                name: {
                    [db.Sequelize.Op.like]: `%${name}%`
                }
            },
            limit: limit,
            offset: offset
        });
        return currClient;
    }
}