const express = require('express');

const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];
  countStudents(database)
    .then((output) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Not Found');
});

app.listen(1245);

module.exports = app;
