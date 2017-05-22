const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./app/routes');

routes.register(app);

app.listen(process.env.PORT, () => {
  console.log('App running on port ' + process.env.PORT);
});
