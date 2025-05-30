const express = require('express');
const router = express.Router();
const db = require('../models');
const auth = require('../auth');
const req = require('express/lib/request');

const EventService = require('../services/eventService');
const EventController = require('../controllers/eventController');

const eventService = new EventService(db.Events, db.Ceremonialist, db.Client);
const eventController = new EventController(eventService);

router.post('',auth.verifyToken ,async (req, res) => {
    eventController.createEvent(req, res);
});

router.get('', auth.verifyToken, async (req, res) => {
    eventController.findAllEvent(req, res);
});

router.get('/:id', auth.verifyToken, async (req, res) => {
    eventController.getEventByPk(req, res);
});

router.put('/:id', auth.verifyToken, async (req, res) => {
    eventController.updateEvent(req, res);
});

module.exports = router;