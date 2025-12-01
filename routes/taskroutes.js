const express = require('express');
const router = express.Router();
const taskController = require('../taskcontroller/controller.js');




router.get('/tasks', taskController.getAllTasks);
router.post('/add', taskController.addTask);
router.delete('/tasks/:taskId', taskController.deleteTask);

module.exports = router;



