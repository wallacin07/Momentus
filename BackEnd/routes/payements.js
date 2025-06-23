const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../auth');

const InvitedsService = require('../services/invitedsService');
const InvitedsController = require('../controllers/invitedsController');

const invitedsService = new InvitedsService(db.Inviteds, db.Events);
const invitedsController = new InvitedsController(invitedsService);

router.post('', auth.verifyToken, async (req, res) => {
    invitedsController.createInvited(req, res);
});
router.get('', auth.verifyToken, async (req, res) => {
    invitedsController.findAllInviteds(req, res);
});
router.get('/:id', auth.verifyToken, async (req, res) => {
    invitedsController.getInvitedByPk(req, res);
});
router.put('', auth.verifyToken, async (req, res) => {
    invitedsController.updateInvited(req, res);
});

module.exports = router;