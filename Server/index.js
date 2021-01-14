/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('../database/index.js');

const app = express();
const port = 3004;

mongo.db.once('open', () => console.log('database connected'));

app.use(bodyParser.json());
app.use(express.static('./Client/public'));

app.use('/', (req, res, next) => {
  console.log(`Now Handling ${req.method} Request`);
  next();
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
// all console.logs need to be stripped before pushing to production
