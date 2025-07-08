const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../auth');

const PaymentsService = require('../services/invitedsService');
const PaymentsController = require('../controllers/paymentsController');

const PaymentsService = new PaymentsService(db.Payments, db.Events);
const PaymentsController = new PaymentsController(PaymentsService);

router.post('', auth.verifyToken, async (req, res) => {
    invitedsController.createPayment(req, res);
});
router.get('', auth.verifyToken, async (req, res) => {
    invitedsController.findAllPayments(req, res);
});
router.get('/:id', auth.verifyToken, async (req, res) => {
    invitedsController.getPaymentByPk(req, res);
});
router.put('', auth.verifyToken, async (req, res) => {
    invitedsController.updatePayment(req, res);
});

module.exports = router;