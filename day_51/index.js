const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// This line automatically serves index.html when you go to '/'
app.use(express.static(__dirname)); 

// In-memory data store
let todos = [
    { id: 1, task: "Learn Express", completed: false },
    { id: 2, task: "Build a REST API", completed: false }
];

// --- API ROUTES ---

// GET all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todo', (req, res) => {
    const newTodo = { id: Date.now(), task: req.body.task, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});



app.delete('/todo/:id', (req, res) => {
    todos = todos.filter(t => t.id !== parseInt(req.params.id));
    res.status(204).send();
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});