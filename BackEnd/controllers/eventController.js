const Event = require('../models/events');
const EventService = require('../services/eventService');

module.exports = class EventController {
    constructor(EventService) {
        this.EventService = EventService;
    }

    async createEvent(req, res) {
        try {
            const { description, name, date, status, clientId} = req.body;
            const idUser = req.user.id;
            const newEvent = await this.EventService.create(description, name, date, status, clientId, idUser);
            res.status(200).json(newEvent);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Ocorreu um erro ao gravar o novo evento.' });
        }
    }

    async findAllEvent(req, res) {
        try {
            const allEvents = await this.EventService.findAll();
            res.status(200).json(allEvents);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Ocorreu um erro.' });
        }
    }

    async getEventByPk(req, res) {
        let id = req.params['id'];
        try {
            const event = await this.EventService.getByPk(id);
            res.status(200).json(event);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Ocorreu um erro.' });
        }
    }

    async updateEvent(req, res) {
        let id = req.params['id'];
        const { description, name, date, status } = req.body;
        try {
            const event = await this.EventService.update(id, description, name, date, status);
            res.status(200).json(event);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Ocorreu um erro.' });
        }
    }
}