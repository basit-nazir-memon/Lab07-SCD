const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask);

router.get('/', taskController.getAllTasks);

router.patch('/:id/complete', taskController.markTaskCompleted);

router.delete('/:id', taskController.deleteTask);

module.exports = router;
