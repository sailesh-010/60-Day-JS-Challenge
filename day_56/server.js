const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '10kb' }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/scan', (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ 
            status: 'error', 
            message: 'No URL provided.' 
        });
    }

    try {
        new URL(url);
    } catch (e) {
        return res.status(400).json({
            status: 'error',
            message: 'Scan failed'
        });
    }

    console.log(`Scanning URL: ${url}`); // Server-side logging
    if (url.startsWith('http://')) {
        return res.json({ 
            status: 'unsafe', 
            message: 'Warning: This site uses HTTP. Your data is not encrypted.' 
        });
    } else if (url.startsWith('https://')) {
        return res.json({ 
            status: 'safe', 
            message: 'Success: This site uses HTTPS. Connection is secure.' 
        });
    } else {
        return res.json({ 
            status: 'unknown', 
            message: 'Caution: Protocol not recognized. Proceed with care.' 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Security Scanner Server running on http://localhost:${PORT}`);
});