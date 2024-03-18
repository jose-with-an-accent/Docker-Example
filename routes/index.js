const express = require('express');
const app = express.Router();

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome Home, not hello world, you are home.' });
});

module.exports = app;
