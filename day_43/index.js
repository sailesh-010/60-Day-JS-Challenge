const fs = require('fs').promises;
const axios = require('axios');

async function checkUrl(url) {
    try {
        const response = await axios.head(url);
        return response.status >= 200 && response.status < 400;
    } catch (error) {
        return false;
    }
}

async function checkUrlsFromFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const urls = data.split('\n').filter(url => url.trim() !== '');

        for (const url of urls) {
            const isAlive = await checkUrl(url);
            console.log(`'${url}' is ${isAlive ? 'alive' : 'not alive'}`);
        }
    } catch (error) {
        console.error('Error reading file or checking URLs:', error.message);
    }
}

checkUrlsFromFile('./test.txt');