const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware');
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use((req, res, next) => {
  res.send('<h2>The server is running now</h2>');
});

app.listen(3000);
