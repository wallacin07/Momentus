const db = require('../models');
const auth = require('../auth');

module.exports = class TaskService {
    constructor(TaskModel,EventModel) {
        this.Task = TaskModel;
        this.Event = EventModel;
    }

    async create(name, description, date, status, eventId) {
        const event = await this.Event.findByPk(eventId);
        if (!event) {
            throw new Error('Event not found');
        }
        
        const newTask = await this.Task.create({
            name: name,
            description: description,
            date: date,
            status: status,
            eventid: eventId
        });
    
        return newTask;
    }

    async findAll() {
        const allTasks = await this.Task.findAll({
            attributes: ['id', 'name', 'description', 'date', 'status'],
            include: {
                model: this.Event,
                as: 'event',
                attributes: ['id', 'name']
            }
        });
        return allTasks;
    }

    async getByPk(pk) {
        const currTask = await this.Task.findByPk(pk, {
            include: {
                model: this.Event,
                as: 'event',
                attributes: ['id', 'name']
            }
        });
        return currTask;
    }

    async update(id, name, description, date, status) {
        const currTask = await this.Task.findByPk(id);
        if (currTask) {
            currTask.name = name || currTask.name;
            currTask.description = description || currTask.description;
            currTask.date = date || currTask.date;
            currTask.status = status || currTask.status;
            await currTask.save();
        }
        return currTask;
    }
}