const db = require('../models');
const auth = require('../auth');

module.exports = class InstallmentsService {
    constructor(InstallmentsModel,PaymentsModel) {
        this.Installments = InstallmentsModel;
        this.Payments = PaymentsModel;
    }
    async create(value, status, number, paymentId) {
        const existedPayment = await this.Payments.findByPk(paymentId);
        if (!existedPayment) {
            throw new Error("Payment not found");
        }

        const newInstallment = await this.Installments.create({
            value: value,
            status: status,
            number: number,
            paymentId: paymentId
        });
        return newInstallment;
    }
    async findAll() {
        const allInstallments = await this.Installments.findAll({
            attributes: ['id', 'value', 'status', 'number'],
            include: [{
                model: this.Payments,
                as: 'payments',
                attributes: ['id', 'value']
            }]
        });
        return allInstallments;
    }
    async getByPk(pk) {
        const currInstallment = await this.Installments.findByPk(pk, {
            include: [{
                model: this.Payments,
                as: 'payments',
                attributes: ['id', 'value']
            }]
        });
        return currInstallment;
    }
    async update(id, value, status, number) {
        const currInstallment = await this.Installments.findByPk(id);
        if (currInstallment) {
            currInstallment.value = value || currInstallment.value;
            currInstallment.status = status || currInstallment.status;
            currInstallment.number = number || currInstallment.number;
            await currInstallment.save();
        }
        return currInstallment;
    }
}
