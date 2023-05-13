const express = require('express');

const { getTodos, deleteTodo, addTodo, updateTodo, handleOptions} = require('../controllers/todo-controllers');

const router = express.Router();

router.get('/todos', getTodos);

router.delete('/todos/:id', deleteTodo);

router.post('/todos', addTodo);

router.patch('/todos/:id', updateTodo);

router.options('/*', handleOptions);

module.exports = router;