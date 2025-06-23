const InstallmentsService = require('../services/InstallmentsService');
const auth = require('../auth');

module.exports = class InstallmentsController {
    constructor(installmentsService) {
        this.installmentsService = installmentsService;
    }

    async createInstallment(req, res) {
        try {
            const { value, status, number, paymentId } = req.body;
            const newInstallment = await this.installmentsService.create(value, status, number, paymentId);
            res.status(201).json(newInstallment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllInstallments(req, res) {
        try {
            const installments = await this.installmentsService.findAll();
            res.status(200).json(installments);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getInstallmentByPk(req, res) {
        try {
            const installment = await this.installmentsService.getByPk(req.params.id);
            if (!installment) {
                return res.status(404).json({ error: 'Installment not found' });
            }
            res.status(200).json(installment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateInstallment(req, res) {
        try {
            const { id } = req.params;
            const { value, status, number } = req.body;
            const updatedInstallment = await this.installmentsService.update(id, value, status, number);
            if (!updatedInstallment) {
                return res.status(404).json({ error: 'Installment not found' });
            }
            res.status(200).json(updatedInstallment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}