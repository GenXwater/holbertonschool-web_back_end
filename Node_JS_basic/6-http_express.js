const express = require('express');

const app = express();

// Définir route pour l'endpoint racine ('/')
app.get('/', (req, res) => {
  // Répondre avec du texte brut :
  res.send('Hello Holberton School!');
});

// Configuration serveur pour listen port 1245 :
app.listen(1245);

module.exports = app;
