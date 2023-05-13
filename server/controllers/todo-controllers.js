const Todo = require('../models/todo');

handleError = (response, error) => {
    response.status(500).json({ error });
};

const getTodos = (request, response) => {
    Todo
        .find()
        .sort({ title: 1})
        .then((todos) => {
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.setHeader('Access-Control-Allow-Methods', '*');
            response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            response
                
                .status(200)
                .json(todos);
        })
        .catch((err) => handleError(response, err));
};

const deleteTodo = (request, response) => {
    Todo
        .findByIdAndDelete(request.params.id)
        .then((result) => {
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Methods', '*');
            response.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
            response
                .status(200)
                .json(result);
        })
        .catch((err) => handleError(response, err));
};

const addTodo = (request, response) => {
    const todo = new Todo(request.body);
    todo
        .save()
        .then((result) => {
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Methods', '*');
            response.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
            response
                .status(201)
                .json(result);
        })
        .catch((err) => handleError(response, err));
};

const updateTodo = (request, response) => {
    Todo
        .findByIdAndUpdate(request.params.id, request.body)
        .then((result) => {
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Methods', '*');
            response.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
            response
                .status(200)
                .json(result);
        })
        .catch((err) => handleError(response, err));
};

const handleOptions = (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin');
    response.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS,PATCH');
    response.send('data');
};

module.exports = {
    getTodos, deleteTodo, addTodo, updateTodo, handleOptions,
};