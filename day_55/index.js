const scan = document.querySelector('#scanButton');
const URL = document.querySelector('#urlInput').value;
scan.addEventListener('click', () => {
    console.log(`Scanning URL: ${URL}`);

}); 