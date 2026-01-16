// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get DOM elements we'll be interacting with
    const scanButton = document.getElementById('scanButton');
    const urlInput = document.getElementById('urlInput');
    const resultContainer = document.getElementById('output');

    // Attach an event listener to our button
    scanButton.addEventListener('click', async () => {
        const targetUrl = urlInput.value.trim();

        // Simple validation: Is the URL input empty?
        if (!targetUrl) {
            resultContainer.innerHTML = "Please enter a URL to scan.";
            resultContainer.className = 'show error';
            return; // Stop the function
        }

        // Add protocol if missing
        const urlToScan = targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`;
        
        // Reset UI while loading
        resultContainer.innerHTML = "Scanning..."; 
        resultContainer.className = 'show loading';
        scanButton.disabled = true;

        try {
            const response = await fetch('/scan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: urlToScan })
            });

            const data = await response.json();

            // Clear previous results
            resultContainer.innerHTML = ''; 

            if (data.status === 'success') {
                // Display Metadata Section
                const metadataSection = document.createElement('div');
                metadataSection.innerHTML = `
                    <h3>📄 Page Metadata</h3>
                    <p><strong>Title:</strong> ${escapeHtml(data.metadata.title)}</p>
                    <p><strong>Description:</strong> ${escapeHtml(data.metadata.description)}</p>
                `;
                
                // Display Security Headers Section
                const securitySection = document.createElement('div');
                securitySection.style.marginTop = '15px';
                securitySection.style.paddingTop = '15px';
                securitySection.style.borderTop = '1px solid rgba(0,0,0,0.1)';
                
                const securityScore = document.createElement('h3');
                securityScore.textContent = `🔒 Security Score: ${data.security.score}`;
                securitySection.appendChild(securityScore);

                const headersList = document.createElement('ul');
                headersList.style.listStyle = 'none';
                headersList.style.paddingLeft = '0';
                
                Object.entries(data.security.headers).forEach(([headerName, headerValue]) => {
                    const li = document.createElement('li');
                    li.style.padding = '8px';
                    li.style.marginBottom = '5px';
                    li.style.borderRadius = '3px';
                    li.style.fontSize = '14px';
                    
                    const isPresent = !headerValue.includes('❌');
                    li.style.backgroundColor = isPresent ? '#e8f5e9' : '#fff3e0';
                    li.style.color = isPresent ? '#2e7d32' : '#e65100';
                    
                    li.innerHTML = `<strong>${headerName}:</strong> ${escapeHtml(headerValue)}`;
                    headersList.appendChild(li);
                });
                
                securitySection.appendChild(headersList);

                // Append to DOM
                resultContainer.appendChild(metadataSection);
                resultContainer.appendChild(securitySection);
                resultContainer.className = 'show success';
            } else {
                // Handle server-side errors (e.g. invalid URL)
                resultContainer.innerHTML = `❌ Error: ${escapeHtml(data.message)}`;
                resultContainer.className = 'show error';
            }
        } catch (err) {
            console.error(err);
            resultContainer.innerHTML = "Failed to connect to the scanner server. Make sure the server is running!";
            resultContainer.className = 'show error';
        } finally {
            scanButton.disabled = false;
        }
    });

    // Allow Enter key to trigger scan
    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            scanButton.click();
        }
    });
});

// Security: Escape HTML to prevent XSS attacks
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
 