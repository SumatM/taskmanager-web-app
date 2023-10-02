const express = require('express');
const taskRoute = express.Router();
const {taskModel} = require('../model/task.model')
const verifyToken = require('../middleware/authrization.middleware')

taskRoute.use(verifyToken)

// Create a new task
taskRoute.post('/', async (req, res) => {
  try {
    const task = new taskModel({...req.body});
    await task.save();
    res.status(201).json({message: 'Task Created Successfully',task});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all tasks
taskRoute.get('/:userId', async (req, res) => {
  try {
    const {userId} = req.params
    
    const tasks = await taskModel.find({ userId});

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single task by ID
taskRoute.get('/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await taskModel.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a task by ID
taskRoute.patch('/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await taskModel.findByIdAndUpdate(taskId, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({message:'Task Updated',task});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a task by ID
taskRoute.delete('/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await taskModel.findByIdAndDelete(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = taskRoute;
