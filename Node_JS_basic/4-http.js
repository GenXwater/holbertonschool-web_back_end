// Create a simple HTTP server using Node's http module.
const http = require('http');

const app = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;