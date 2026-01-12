const scan = document.querySelector('#scanButton');
const URL = document.querySelector('#urlInput').value;
scan.addEventListener('click', () => {
    console.log("Scan button clicked!");
    const targetUrl = URL;

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