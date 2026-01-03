const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and Form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. GET Route: Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 2. GET Route: Send a simple JSON response
app.get('/get', (req, res) => {
    const name = req.query.name || 'Guest';
    res.json({ message: `Hello, ${name}! This was a GET request.` });
});

// 3. POST Route: Receive data from the client
app.post('/post', (req, res) => {
    const receivedData = req.body;
    console.log('Received:', receivedData);
    
    res.json({
        status: 'Success',
        received: receivedData,
        message: 'This was a POST request.'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
}); 