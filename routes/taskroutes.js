const express = require('express');
const router = express.Router();
const taskController = require('../taskcontroller/controller');


//router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.addTask);
router.delete('/tasks/:taskId', taskController.deleteTask);

module.exports = router;



