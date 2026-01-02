const express = require('express');
const app = express();

const PORT = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello from /hello route');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});