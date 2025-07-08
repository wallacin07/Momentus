const db = require('../models');
const auth = require('../auth');

module.exports = class PaymentsService {
    constructor(PaymentsModel,EventsModel) {
        this.Payments = PaymentsModel;
        this.Events = EventsModel;
    }

    async create(value, receiver, ceremonialistId, eventId) {
        const existedEvent = this.Events.findByPk(eventId)
        if(!existedEvent)
        {
            throw new Error("Event not found")
        }

        const newPayments = await this.Payments.create({
            value:value,
            receiver:receiver,
            eventId:eventId,
            ceremonialistId:ceremonialistId
        });
        return newPayments;
    }

    async findAll() {
        const allPayments = await this.Payments.findAll({
            attributes: ['id', 'receiver','value', 'eventId', 'ceremonialistId'],
        });
        return allPayments;
    }

    async getByPk(pk) {
        const currPayments = await this.Payments.findByPk(pk);
        return currPayments;
    }

    async update(id, value, receiver) {
        const currPayments = await this.Payments.findByPk(id);
        if (currInvited) {
            currPayments.value = value
            currPayments.receiver = receiver
            await currPayments.save();
        }
        return currPayments;
    }
}