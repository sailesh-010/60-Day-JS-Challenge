// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const scan = document.querySelector('#scanButton');
    const urlInput = document.querySelector('#urlInput');
    const resultDisplay = document.querySelector('#output');

    console.log("DOM loaded, scan button:", scan); // Debug log

    if (!scan) {
        console.error("Scan button not found!");
        return;
    }

    scan.addEventListener('click', () => {
            console.log("Scan button clicked!");
            const targetUrl = urlInput.value;

            // The Fetch Request
            fetch('/scan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url: targetUrl })
            })
            .then(response => response.json())
            .then(data => {
                console.log("Server says:", data);
                resultDisplay.textContent = `Status: ${data.message}`;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDisplay.textContent = "Error connecting to server.";
            });

        });
}); 