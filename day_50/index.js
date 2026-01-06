const express = require('express');

const app = express();

app.use(express.json());

app.post('/user', (req, res) => {
    const data = req.body;
    console.log(data.username); 
});

res.json({ 
    status: "success", 
    message: "User created" 
});


