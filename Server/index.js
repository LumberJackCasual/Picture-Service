/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('../database/index.js');

const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(express.static('./Client/public'));

app.use('/', (req, res, next) => {
  console.log(`Now Handling ${req.method} Request from ${req.path}`);
  next();
});

app.get('/api/picture-service/:id', (req, res) => {
  const id = parseInt(req.path.split('/')[3], 10);
  mongo.Item.find({ product_id: id }, (err, docs) => {
    if (err) {
      res.send(err);
    }
    res.send(docs);
  });
});

app.listen(port, () => {
  console.log(`server listening for picture service on port ${port}`);
});
