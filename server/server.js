const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const app = express();
const db= require('./dataBase');
  
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json())
// app.use(bodyParser, urlencoded({ extended: true }));
// app.use(express.static(__dirname + "fooddose/public/index.html")); 


app.get('/', function (req, res) {
    res.json({ message: 'Welcome to Food Dose!' });
});


module.exports = app;
