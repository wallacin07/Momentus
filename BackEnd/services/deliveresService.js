const db = require('../models');

module.exports = class DeliveresService {
    constructor(DeliveresModel,SuppliersModel,EventsModel) {
        this.Deliveres = DeliveresModel;
        this.Suppliers = SuppliersModel;
        this.Events = EventsModel;
    }

    async create(name, email, number, address, eventId, supplierId) {

        const event = await this.Events.findByPk(eventId);
        if (!event) {
            throw new Error('Evento não encontrado');
        }
        const supplier = await this.Suppliers.findByPk(supplierId);
        if (!supplier) {
            throw new Error('Fornecedor não encontrado');
        }

        const newDeliveres = await this.Deliveres.create({
            name: name,
            email: email,
            number: number,
            adress: adress,
            eventId: eventId,
            supplierId: supplierId
        });
        return newDeliveres;
    }

    async findAll() {
        const allDeliveres = await this.Deliveres.findAll({
            attributes: ['id', 'name', 'email', 'number', 'adress'],
            include: [
                {
                    model: db.Events,
                    as: 'events',
                    attributes: ['id', 'name']
                },
                {
                    model: db.Suppliers,
                    as: 'suppliers',
                    attributes: ['id', 'name']
                }
            ]
        });
        return allDeliveres;
    }

    async getByPk(pk) {
        const currDeliveres = await this.Deliveres.findByPk(pk, {
            include: [
                {
                    model: db.Events,
                    as: 'events',
                    attributes: ['id', 'name']
                },
                {
                    model: db.Suppliers,
                    as: 'suppliers',
                    attributes: ['id', 'name']
                }
            ]
        });
        return currDeliveres;
    }

    async update(id, name, email, number, adress) {
        const currDeliveres = await this.Deliveres.findByPk(id);
        if (currDeliveres) {
            currDeliveres.name = name;
            currDeliveres.email = email;
            currDeliveres.number = number;
            currDeliveres.adress = adress;
            await currDeliveres.save();
        }
        return currDeliveres;
    }
}