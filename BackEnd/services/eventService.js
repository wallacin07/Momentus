const db = require('../models');

module.exports = class EventService {
    constructor(EventModel, CeremonialistModel, ClientModel) {
        this.Event = EventModel;
        this.Ceremonialist = CeremonialistModel;
        this.Client = ClientModel;
    }

    async create(description, name, date, status, clientId, ceremonialistId) {
        const newEvent = await this.Event.create({
            description: description,
            name: name,
            date: date,
            status: status,
            clientId: clientId,
            ceremonialistId: ceremonialistId
        });
        return newEvent;
    }

    async findAll() {
        const allEvents = await this.Event.findAll({
            attributes: ['id', 'description', 'name', 'date', 'status'],
            include: [
                {
                    model: this.Client,
                    as: 'client',
                    attributes: ['id', 'name']
                },
                {
                    model: this.Ceremonialist,
                    as: 'ceremonialist',
                    attributes: ['id', 'name']
                }
            ]
        });
        return allEvents;
    }
    
    async getByPk(pk) {
        const currEvent = await this.Event.findByPk(pk, {
            include: [
                {
                    model: this.Client,
                    as: 'client',
                    attributes: ['id', 'name']
                },
                {
                    model: this.Ceremonialist,
                    as: 'ceremonialist',
                    attributes: ['id', 'name']
                }
            ]
        });
        return currEvent;
    }

    async update(id, description, name, date, status) {
        const currEvent = await this.Event.findByPk(id);
        if (currEvent) {
            currEvent.description = description || currEvent.description;
            currEvent.name = name || currEvent.name;
            currEvent.date = date || currEvent.date;
            currEvent.status = status || currEvent.status;
            await currEvent.save();
        }
        return currEvent;
    }
}