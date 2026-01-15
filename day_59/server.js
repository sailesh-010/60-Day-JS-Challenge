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
});

// Mark the function as 'async' because axios takes time
app.post('/scan', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ 
            status: 'error',
            message: 'No URL provided' 
        });
    }

    try {
        console.log(`Visiting: ${url}`);
        
        // 1. Make the server visit the URL with timeout
        const response = await axios.get(url, {
            timeout: 10000,
            headers: {
                'User-Agent': 'Website Scanner (Educational Purpose)'
            }
        });
        const html = response.data; // This is the raw HTML string

        // 2. Extract METADATA: Page title
        const titleMatch = html.match(/<title>(.*?)<\/title>/i);
        const pageTitle = titleMatch ? titleMatch[1].trim() : 'No title found';

        // 3. Extract METADATA: Page description from meta tag
        const descriptionMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
        const pageDescription = descriptionMatch ? descriptionMatch[1].trim() : 'No description found';

        // 4. Check for SECURITY HEADERS
        const securityHeaders = {
            'X-Frame-Options': response.headers['x-frame-options'] || '❌ Not Set (Vulnerable to Clickjacking)',
            'Content-Security-Policy': response.headers['content-security-policy'] || '❌ Not Set',
            'X-Content-Type-Options': response.headers['x-content-type-options'] || '❌ Not Set',
            'Strict-Transport-Security': response.headers['strict-transport-security'] || '❌ Not Set (HTTPS not enforced)',
            'X-XSS-Protection': response.headers['x-xss-protection'] || '⚠️ Not Set (older browsers vulnerable)'
        };

        // 5. Determine security score
        let securityScore = 0;
        if (securityHeaders['X-Frame-Options'] && !securityHeaders['X-Frame-Options'].includes('❌')) securityScore++;
        if (securityHeaders['Content-Security-Policy'] && !securityHeaders['Content-Security-Policy'].includes('❌')) securityScore++;
        if (securityHeaders['X-Content-Type-Options'] && !securityHeaders['X-Content-Type-Options'].includes('❌')) securityScore++;
        if (securityHeaders['Strict-Transport-Security'] && !securityHeaders['Strict-Transport-Security'].includes('❌')) securityScore++;
        if (securityHeaders['X-XSS-Protection'] && !securityHeaders['X-XSS-Protection'].includes('❌')) securityScore++;

        // 6. Send the complete data back to the frontend
        res.json({
            status: 'success',
            url: url,
            metadata: {
                title: pageTitle,
                description: pageDescription
            },
            security: {
                headers: securityHeaders,
                score: `${securityScore}/5`
            },
            message: 'Site scanned successfully.'
        });

    } catch (error) {
        // Handle errors (e.g., website doesn't exist, timeout)
        console.error("Scan Error:", error.message);
        
        let errorMessage = 'Could not reach the target website.';
        
        if (error.code === 'ENOTFOUND') {
            errorMessage = 'Domain not found. Please check the URL.';
        } else if (error.code === 'ECONNREFUSED') {
            errorMessage = 'Connection refused. The website may be offline.';
        } else if (error.code === 'ECONNABORTED') {
            errorMessage = 'Request timed out. The website took too long to respond.';
        }
        
        res.status(500).json({ 
            status: 'error', 
            message: errorMessage
        });
    }
});

app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════════╗
    ║  🔍 Website Scanner Server                  ║
    ║  Running on http://localhost:${PORT}       ║
    ╚════════════════════════════════════════════╝
    `);
});