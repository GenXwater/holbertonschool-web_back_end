// Importer le module http pour créer un serveur HTTP
const http = require('http');
// Importer la fonction countStudents depuis le fichier 3-read_file_async.js
const countStudents = require('./3-read_file_async');

// Création du serveur HTTP avec http.createServer
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Définir le code de statut HTTP comme 200 par défaut
  res.setHeader('Content-Type', 'text/plain'); // Définir le type de contenu comme texte brut

  if (req.url === '/') { // Si l'URL est "/"
    res.end('Hello Holberton School!'); // Retourne "Hello Holberton School!"
  } else if (req.url === '/students') { // Si l'URL est "/students"
    const db = process.argv[2]; // Récupère le chemin du fichier CSV passé en argument
    countStudents(db) // Appelle la fonction countStudents
      .then((output) => {
        // En cas de succès, renvoie la liste des étudiants avec leurs informations
        res.end(`This is the list of our students\n${output}`);
      })
      .catch((err) => {
        // En cas d'erreur, affiche un message d'erreur avec la raison
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.statusCode = 404; // Si l'URL ne correspond à aucune route, retourne une erreur 404
    res.end('Not Found'); // Message "Not Found" pour les routes non définies
  }
});

// Configurer le serveur pour écouter sur le port 1245
app.listen(1245);

// Exporter l'application pour permettre son utilisation dans d'autres fichiers
module.exports = app;
