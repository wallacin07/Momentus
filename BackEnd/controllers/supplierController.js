const SupplierService = require('../services/supplierService');
const db = require('../models');

module.exports = class SupplierController {
    constructor(supplierService) {
        this.supplierService = supplierService;
    }

    async createSupplier(req, res) {
        try {
            const { name, email, number, adress, description, CNPJ } = req.body;
            console.log(adress)
            const newSupplier = await this.supplierService.create(name, email, number, adress, description, CNPJ);
            res.status(200).json(newSupplier);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }
    async findAllSuppliers(req, res) {
        try {
            const allSuppliers = await this.supplierService.findAll();
            res.status(200).json(allSuppliers);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }
    async getSupplierByPk(req, res) {
        try {
            const id = req.params['id'];
            const supplier = await this.supplierService.getByPk(id);
            if (supplier) {
                res.status(200).json(supplier);
            } else {
                res.status(404).json({ error: 'Supplier not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async updateSupplier(req, res) {
        try {
            const { id, name, email, number, adress, description, CNPJ } = req.body;
            const updatedSupplier = await this.supplierService.update(id, name, email, number, adress, description, CNPJ);
            if (updatedSupplier) {
                res.status(200).json(updatedSupplier);
            } else {
                res.status(404).json({ error: 'Supplier not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}