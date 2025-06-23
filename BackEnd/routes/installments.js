const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../auth');

const InstallmentsService = require('../services/InstallmentsService');
const InstallmentsController = require('../controllers/installmentsController');

const installmentsService = new InstallmentsService(db.Installments, db.Payments);
const installmentsController = new InstallmentsController(installmentsService);

router.post('', auth.verifyToken, async (req, res) => {
    installmentsController.createInstallment(req, res);
});
router.get('', auth.verifyToken, async (req, res) => {
    installmentsController.findAllInstallments(req, res);
});
router.get('/:id', auth.verifyToken, async (req, res) => {
    installmentsController.getInstallmentByPk(req, res);
});
router.put('/:id', auth.verifyToken, async (req, res) => {
    installmentsController.updateInstallment(req, res);
});

module.exports = router;