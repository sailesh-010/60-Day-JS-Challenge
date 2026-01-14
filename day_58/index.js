// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get DOM elements we'll be interacting with
    const scanButton = document.getElementById('scanButton');
    const urlInput = document.getElementById('urlInput');
    const resultContainer = document.getElementById('output');

    // Attach an event listener to our button
    scanButton.addEventListener('click', () => {
        const targetUrl = urlInput.value;

        // Simple validation: Is the URL input empty?
        if (!targetUrl) {
            resultContainer.textContent = "Please enter a URL to scan.";
            resultContainer.style.color = "orange";
            return; // Stop the function
        }
        
        // reset UI while loading
        resultContainer.textContent = "Scanning..."; 
        resultContainer.style.color = "blue";

        fetch('/scan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: targetUrl })
        })
        .then(response => response.json())
        .then(data => {
            // Clear previous results
            resultContainer.innerHTML = ''; 

            if (data.status === 'success') {
                // Create elements to display data
                const titleElement = document.createElement('h3');
                titleElement.textContent = `Site Title: ${data.pageTitle}`;
                titleElement.style.color = 'green';
                
                const msgElement = document.createElement('p');
                msgElement.textContent = data.message;

                // Append to DOM
                resultContainer.appendChild(titleElement);
                resultContainer.appendChild(msgElement);
            } else {
                // Handle server-side errors (e.g. invalid URL)
                resultContainer.textContent = `Error: ${data.message}`;
                resultContainer.style.color = 'red';
            }
        })
        .catch(err => {
            console.error(err);
            resultContainer.textContent = "Failed to connect to the scanner server.";
            resultContainer.style.color = 'red';
        });
    });
});
 