const http = require('https');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message === 'get-user-data') {
    sendResponse(user);
  }
});

// 1. Send a message to the service worker requesting the user's data
chrome.runtime.sendMessage('get-user-data', (response) => {
  // 3. Got an asynchronous response with the data from the service worker
  console.log('received user data', response);
  initializeUI(response);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
// Example of a simple user data object
const user = {
  username: 'demo-user'
};


document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Hello, World! Ce message est généré par index.js';
});

