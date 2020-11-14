const express = require('express');
const routers = express.Router();
const userSchema = require('./modules/SignUpModule.js')


routers.get('/', function (req, res, next) {
    res.send('Helllllllllo');
});


routers.post('/signup', (req, res) => {
    const signedUpUser = new userSchema({
        UserID: req.body.UserID,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Email: req.body.Email,
    })
    signedUpUser.save()
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
})

module.exports = routers;
