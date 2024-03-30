import express from 'express';
import { getAllTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

// Get all tasks
router.get('/', getAllTasks);

// Create a new task
router.post('/', createTask);

// Update a task
router.patch('/:id', updateTask);

// Delete a task
router.delete('/:id', deleteTask);

export default router;
