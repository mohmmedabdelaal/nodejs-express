const express = require('express');
const bodyParser = require('body-parser');
const locationRoutes = require('./routes/locate');
const app = express();

// app.set('view engine', 'ejs');
// app.set('views', './views');

app.use(bodyParser.json());

app.use(locationRoutes);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});
// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use((req, res, next) => {
//   const userName = req.body.username || 'Anon';

//   res.render('index', {
//     user: userName,
//   });
// });

app.listen(3000);
