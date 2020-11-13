const express = require('express');
const routers=express.Router();
routers.get('/', function(req, res,next) {
    res.send('Helllllllllo');
});
module.exports = routers;
