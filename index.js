const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const regex = /nordine/;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

let count = 0;
const counterElement = document.createElement('p');
counterElement.textContent = `Compteur : ${count}`;
document.getElementById('content').appendChild(counterElement);

setInterval(() => {
    count++;
    counterElement.textContent = `Compteur : ${count}`;
}, 1000);

const timeElement = document.createElement('p');
timeElement.textContent = `Heure actuelle : ${new Date().toLocaleTimeString()}`;
document.getElementById('content').appendChild(timeElement);

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
document.getElementById('content').appendChild(list);
// server.js
const express = require('express');
const app = express();
const port = 3000;

class TrendsSDK {
    constructor() {
        this.trends = [
            "Graph Theory",
            "Combinatorics",
            "Number Theory"
        ];
    }

    addTrend(trend) {
        this.trends.push(trend);
    }

    getTrend(index) {
        if (index < 0 || index >= this.trends.length) {
            throw new RangeError("Index out of range");
        }
        return this.trends[index];
    }

    getNumberOfTrends() {
        return this.trends.length;
    }
}

const sdk = new TrendsSDK();

app.get('/trends', (req, res) => {
    res.json(sdk.trends);
});

app.post('/trends', (req, res) => {
    const newTrend = req.body.trend;
    sdk.addTrend(newTrend);
    res.status(201).send('Trend added');
});

app.get('/trends/:index', (req, res) => {
    try {
        const index = parseInt(req.params.index, 10);
        res.json(sdk.getTrend(index));
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
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

const button = document.createElement('button');
button.textContent = 'Changer la couleur de fond';
button.addEventListener('click', () => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
document.getElementById('content').appendChild(button);

// Example of a simple user data object
const user = {
  username: 'demo-user'
};

document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Hello, World! Ce message est généré par index.js';
});

// Remplacez 'YOUR_ACCESS_TOKEN' par votre jeton d'accès VK
const accessToken = 'YOUR_ACCESS_TOKEN';
const userId = 'USER_ID_TO_SEND_MESSAGE';
const message = 'Bonjour! Comment ça va?';

fetch(`https://api.vk.com/method/messages.send?user_id=${userId}&message=${message}&access_token=${accessToken}&v=5.131`)
  .then(response => response.json())
  .then(data => {
    if (data.response) {
      console.log('Message envoyé avec succès!');
    } else {
      console.error('Erreur lors de l\'envoi du message:', data);
    }
  })
  .catch(error => console.error('Erreur de requête:', error));
