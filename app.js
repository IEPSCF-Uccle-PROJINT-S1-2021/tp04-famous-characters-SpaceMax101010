const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
//const personnages = require('./presonnages');
const app = express();



app.use(logger('dev'));
//app.use('/', personnages);
app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({extended : false}));


app.get('/',(req, res) =>{
  res.redirect("/static/affichagePreso.html");
});


app.listen(4242, () => {
  console.log('Express.js server listening on http://127.0.0.1:4242/');
});
