const InvitedsService = require('../services/invitedsService');
const db = require('../models');

module.exports = class InvitedsController {
    constructor(invitedsService) {
        this.invitedsService = invitedsService;
    }

    async createInvited(req, res) {
        try {
            const { name, CPF, phone, accessToken, eventId } = req.body;
            const newInvited = await this.invitedsService.create(name, CPF, phone, accessToken, eventId);
            res.status(200).json(newInvited);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'An unexpected error occurred while creating the invited.' });
            
            if(error.message === 'Event not found')
            {
                res.status(500).json({ error: error.message });
            }
        }
    }

    async findAllInviteds(req, res) {
        try {
            const allInviteds = await this.invitedsService.findAll();
            res.status(200).json(allInviteds);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getInvitedByPk(req, res) {
        try {
            const id = req.params['id'];
            const invited = await this.invitedsService.getByPk(id);
            if (invited) {
                res.status(200).json(invited);
            } else {
                res.status(404).json({ error: 'Invited not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateInvited(req, res) {
        try {
            const { id, name, CPF, phone, accessToken } = req.body;
            const updatedInvited = await this.invitedsService.update(id, name, CPF, phone, accessToken);
            if (updatedInvited) {
                res.status(200).json(updatedInvited);
            } else {
                res.status(404).json({ error: 'Invited not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}