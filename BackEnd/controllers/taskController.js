const Task = require('../models/task');
const TaskService = require('../services/taskService');

module.exports = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    async createTask(req, res) {
        try {
            const { name, description, date, status, eventId } = req.body;
            const newTask = await this.taskService.create(name, description, date, status, eventId);
            res.status(201).json(newTask);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    async findAllTasks(req, res) {
        try {
            const allTasks = await this.taskService.findAll();
            res.status(200).json(allTasks);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    async getTaskByPk(req, res) {
        try {
            const id = req.params['id'];
            const task = await this.taskService.getByPk(id);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateTask(req, res) {
        try {
            const { id, name, description, date, status } = req.body;
            const updatedTask = await this.taskService.update(id, name, description, date, status);
            if (updatedTask) {
                res.status(200).json(updatedTask);
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }
}