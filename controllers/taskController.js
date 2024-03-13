const Task = require("../Models/Task");

let tasks = Task.getAll();

const taskController = {
    createTask: (req, res) => {
        const { title, description, dueDate, category, priority } = req.body;
        if (!title || !dueDate || !category || !priority) {
            return res.status(400).json({ message: 'Title, due date, category, and priority are required' });
        }

        const newTask = new Task(title, description, dueDate, category, priority);
        newTask.save();
        return res.status(201).json(newTask);
    },

    getAllTasks: (req, res) => {
        return res.status(200).json(tasks);
    },

    markTaskCompleted: (req, res) => {
        const taskId = parseInt(req.params.id);
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex === -1) {
            return res.status(404).json({ message: 'Task not found' });
        }

        tasks[taskIndex].completed = true;
        return res.status(200).json(tasks[taskIndex]);
    },

    deleteTask: (req, res) => {
        const taskId = parseInt(req.params.id);
        tasks = tasks.filter(task => task.id !== taskId);
        return res.status(204).end();
    }
};

module.exports = taskController;
