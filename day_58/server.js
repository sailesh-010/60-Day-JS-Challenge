const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Import the HTTP client
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


// Mark the function as 'async' because axios takes time
app.post('/scan', async (req, res) => {
    const { url } = req.body;

    if (!url) return res.status(400).json({ error: 'No URL provided' });

    try {
        console.log(`Visiting: ${url}`);
        
        // 1. Make the server visit the URL
        const response = await axios.get(url);
        const html = response.data; // This is the raw HTML string

        // 2. basic Logic to find the <title> tag
        // We use a Regular Expression (Regex) to extract text between tags
        const titleMatch = html.match(/<title>(.*?)<\/title>/i);
        const pageTitle = titleMatch ? titleMatch[1] : 'No title found';

        // 3. Send the real data back to the frontend
        res.json({
            status: 'success',
            url: url,
            pageTitle: pageTitle,
            message: 'Site scanned successfully.'
        });

    } catch (error) {
        // Handle errors (e.g., website doesn't exist, timeout)
        console.error("Scan Error:", error.message);
        res.status(500).json({ 
            status: 'error', 
            message: 'Could not reach the target website.' 
        });
    }
});

app.listen(PORT, () => console.log(`Scanner running on port ${PORT}`));