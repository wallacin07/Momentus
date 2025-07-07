const db = require('../models');
const auth = require('../auth');

module.exports = class SupplierService {
    constructor(SupplierModel) {
        this.Supplier = SupplierModel;
    }

    async create(name, email, number, address, description, CNPJ) {
        const newSupplier = await this.Supplier.create({
            name: name,
            email: email,
            number: number,
            address: address,
            description: description,
            CNPJ: CNPJ,
        });
        return newSupplier;
    }

    async findAll() {
        const allSuppliers = await this.Supplier.findAll({
            attributes: ['id', 'name', 'email', 'number', 'address', 'description', 'CNPJ'],
        });
        return allSuppliers;
    }

    async getByPk(pk) {
        const currSupplier = await this.Supplier.findByPk(pk);
        return currSupplier;
    }

    async update(id, name, email, number, address, description, CNPJ) {
        const currSupplier = await this.Supplier.findByPk(id);
        if (currSupplier) {
            currSupplier.name = name || currSupplier.name;
            currSupplier.email = email || currSupplier.email;
            currSupplier.number = number || currSupplier.number;
            currSupplier.address = address || currSupplier.address;
            currSupplier.description = description || currSupplier.description;
            currSupplier.CNPJ = CNPJ || currSupplier.CNPJ;
            await currSupplier.save();
        }
        return currSupplier;
    } 

}