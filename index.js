const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./app/routes');

require('dotenv').config();
const { DB_HOST, DB_DATABASE, PORT } = process.env;

app.use(require('body-parser').json())

mongoose.connect('mongodb://' + DB_HOST + '/' + DB_DATABASE);
routes.register(app);

app.listen(PORT, () => {
  console.log('App running on port ' + PORT);
});
