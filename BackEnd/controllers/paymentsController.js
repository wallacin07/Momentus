const PaymentsService = require('../services/paymentsService');
const db = require('../models');

module.exports = class PaymentsController {
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }

    async createPayment(req, res) {
        try {
            const { value, ceremonialistId, eventId } = req.body;
            const newPayment = await this.paymentsService.create(value, ceremonialistId, eventId);
            res.status(201).json(newPayment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllPayments(req, res) {
        try {
            const allPayments = await this.paymentsService.findAll();
            res.status(200).json(allPayments);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getPaymentByPk(req, res) {
        try {
            const payment = await this.paymentsService.getByPk(req.params.id);
            if (!payment) {
                return res.status(404).json({ error: 'Payment not found' });
            }
            res.status(200).json(payment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updatePayment(req, res) {
        try {
            const { id } = req.params;
            const { value, receiver } = req.body;
            const updatedPayment = await this.paymentsService.update(id, receiver, value);
            if (!updatedPayment) {
                return res.status(404).json({ error: 'Payment not found' });
            }
            res.status(200).json(updatedPayment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}