const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('./Client/public'));

app.use('/', (req, res, next)=>{
  console.log(`Now Handling ${req.method} Request`)
})

app.listen(port, ()=>{
  console.log(`server listening on port ${port}`)
})