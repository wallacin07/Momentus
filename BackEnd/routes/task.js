const express = require('express');
const router = express.Router();
const db = require('../models')
const auth = require('../auth')

const TaskService = require('../services/taskService');
const TaskController = require('../controllers/taskController');

const taskService = new TaskService(db.Task, db.Events);
const taskController = new TaskController(taskService);

router.post('', async (req, res) => {
    taskController.createTask(req, res);
});

router.get('', async (req, res) => {
    taskController.findAllTasks(req, res);
});

router.get('/:id', async (req, res) => {
    taskController.getTaskByPk(req, res);
});

router.post('/update', async (req, res) => {
    taskController.updateTask(req, res);
});

module.exports = router;