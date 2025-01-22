const http = require('http');

// Creat server :
const app = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader(200, {'Content-Type': 'text/plain'});
  res.end('Hello Holberton School');
});

// Le serveur écoute sur le port 1245 :
app.listen(1245);

module.exports = app;
