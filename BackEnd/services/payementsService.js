const db = require('../models');
const auth = require('../auth');

module.exports = class PaymentsService {
    constructor(PaymentsModel,EventsModel) {
        this.Inviteds = PaymentsModel;
        this.Events = EventsModel;
    }

    async create(value, ceremonialistId, eventId) {
        const existedEvent = this.Events.findByPk(eventId)
        if(!existedEvent)
        {
            throw new Error("Event not found")
        }

        const newInvited = await this.Inviteds.create({
            value:value,
            eventId:eventId,
            ceremonialistId:ceremonialistId
        });
        return newInvited;
    }

    async findAll() {
        const allInviteds = await this.Inviteds.findAll({
            attributes: ['id', 'value', 'eventId', 'ceremonialistId'],
        });
        return allInviteds;
    }

    async getByPk(pk) {
        const currInvited = await this.Inviteds.findByPk(pk);
        return currInvited;
    }

    async update(id, value) {
        const currInvited = await this.Inviteds.findByPk(id);
        if (currInvited) {
            currInvited.value = value
            await currInvited.save();
        }
        return currInvited;
    }
}