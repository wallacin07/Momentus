const Deliveres = require("../models/deliveres");
const DeliveresService = require("../services/deliveresService");

module.exports = class DeliveresController {
    constructor(deliveresService) {
        this.deliveresService = deliveresService;
    }

    async createDeliveres(req, res) {
        try {
            const { name, email, number, adress, eventId, supplierId } = req.body;
            const newDeliveres = await this.deliveresService.create(name, email, number, adress, eventId, supplierId);
            res.status(201).json(newDeliveres);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findAllDeliveres(req, res) {
        try {
            const allDeliveres = await this.deliveresService.findAll();
            res.status(200).json(allDeliveres);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async getDeliveresByPk(req, res) {
        let id = req.params['id'];
        try {
            const deliveres = await this.deliveresService.getByPk(id);
            res.status(200).json(deliveres);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateDeliveres(req, res) {
        let id = req.params['id'];
        try {
            const { name, email, number, adress } = req.body;
            const updatedDeliveres = await this.deliveresService.update(id, name, email, number, adress);
            res.status(200).json(updatedDeliveres);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}