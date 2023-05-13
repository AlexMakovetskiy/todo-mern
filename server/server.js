const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo-routes');

const app = express();
app.use(express.json());
app.use(todoRoutes);

const PORT = 8000;
const URL = 'mongodb://127.0.0.1:27017/todobox';

mongoose.connect(URL);

app.listen(PORT);