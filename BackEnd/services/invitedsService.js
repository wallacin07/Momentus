const db = require('../models');
const auth = require('../auth');

module.exports = class InvitedsService {
    constructor(InvitedsModel,EventsModel) {
        this.Inviteds = InvitedsModel;
        this.Events = EventsModel;
    }

    async create(name, CPF, phone, accessToken, eventId) {
        // Check if the event exists
        const eventExists = await this.Events.findByPk(eventId);
        if (!eventExists) {
            throw new Error('Event not found');
        }

        const newInvited = await this.Inviteds.create({
            name: name,
            CPF: CPF,
            phone: phone,
            accessToken: accessToken,
            eventId: eventId
        });
        return newInvited;
    }

    async findAll() {
        const allInviteds = await this.Inviteds.findAll({
            attributes: ['id', 'name', 'CPF', 'phone', 'accessToken'],
        });
        return allInviteds;
    }

    async getByPk(pk) {
        const currInvited = await this.Inviteds.findByPk(pk);
        return currInvited;
    }

    async update(id, name, CPF, phone, accessToken) {
        const currInvited = await this.Inviteds.findByPk(id);
        if (currInvited) {
            currInvited.name = name || currInvited.name;
            currInvited.CPF = CPF || currInvited.CPF;
            currInvited.phone = phone || currInvited.phone;
            currInvited.accessToken = accessToken || currInvited.accessToken;
            await currInvited.save();
        }
        return currInvited;
    }
}