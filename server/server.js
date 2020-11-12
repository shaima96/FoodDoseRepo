// import express from "express";
// import bodyParser from "body-parser";
const express = require('express');
const bodyParser = require('body-parser');
const app = express();




// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(bodyParser.json())
// app.use(bodyParser, urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.json({ message: 'Welcome to Food Dose!' });
});


module.exports = app;
