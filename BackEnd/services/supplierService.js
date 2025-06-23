const db = require('../models');
const auth = require('../auth');

module.exports = class SupplierService {
    constructor(SupplierModel) {
        this.Supplier = SupplierModel;
    }

    async create(name, email, number, adress, description, CNPJ) {
        const newSupplier = await this.Supplier.create({
            name: name,
            email: email,
            number: number,
            adress: adress,
            description: description,
            CNPJ: CNPJ,
        });
        return newSupplier;
    }

    async findAll() {
        const allSuppliers = await this.Supplier.findAll({
            attributes: ['id', 'name', 'email', 'number', 'adress', 'description', 'CNPJ'],
        });
        return allSuppliers;
    }

    async getByPk(pk) {
        const currSupplier = await this.Supplier.findByPk(pk);
        return currSupplier;
    }

    async update(id, name, email, number, adress, description, CNPJ) {
        const currSupplier = await this.Supplier.findByPk(id);
        if (currSupplier) {
            currSupplier.name = name || currSupplier.name;
            currSupplier.email = email || currSupplier.email;
            currSupplier.number = number || currSupplier.number;
            currSupplier.adress = adress || currSupplier.adress;
            currSupplier.description = description || currSupplier.description;
            currSupplier.CNPJ = CNPJ || currSupplier.CNPJ;
            await currSupplier.save();
        }
        return currSupplier;
    } 

}