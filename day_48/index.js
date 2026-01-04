const express = require('express');
const path = require('path');
const { json } = require('stream/consumers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next)=>{
    console.log(`${req.method} request for '${req.url}'`);
    next();
})


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});