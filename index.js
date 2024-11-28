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
});let count = 0;
const counterElement = document.createElement('p');
counterElement.textContent = `Compteur : ${count}`;
document.getElementById('content').appendChild(counterElement);

setInterval(() => {
    count++;
    counterElement.textContent = `Compteur : ${count}`;
}, 1000);

const timeElement = document.createElement('p');
timeElement.textContent = `Heure actuelle : ${new Date().toLocaleTimeString()}`;

const img = document.createElement('img');
img.src = 'https://via.placeholder.com/150';
img.alt = 'Image de remplacement';
document.getElementById('content').appendChild(img);


const list = document.createElement('ul');
['Élément 1', 'Élément 2', 'Élément 3'].forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
});



const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Entrez votre nom';
const submit = document.createElement('button');
submit.textContent = 'Envoyer';
form.appendChild(input);
form.appendChild(submit);
document.getElementById('content').appendChild(form);





document.getElementById('content').appendChild(list);


const button = document.createElement('button');
button.textContent = 'Changer la couleur de fond';
button.addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});
document.getElementById('content').appendChild(button);





document.getElementById('content').appendChild(timeElement);

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

