const express = require('express');
const router = express.Router();
const db = require('../models');
const DeliveresService = require('../services/deliveresService');
const DeliveresController = require('../controllers/deliveresController');

const deliveresService = new DeliveresService(db.Deliveres, db.Suppliers, db.Events);
const deliveresController = new DeliveresController(deliveresService);

module.exports = router.post('', async (req, res) => {
    deliveresController.createDeliveres(req, res);
})
.get('', async (req, res) => {
    deliveresController.findAllDeliveres(req, res);
})
.get('/:id', async (req, res) => {
    deliveresController.getDeliveresByPk(req, res);
})
.put('/:id', async (req, res) => {
    deliveresController.updateDeliveres(req, res);
});


