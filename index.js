const express = require('express');
const app = express();
const jugadores = require('./5-posiciones/lugares');

app.get('/', (req, res) => (res.json(jugadores)));

app.listen(3000, () => (console.log('Server running on port 3000')));
