const express = require('express');
const routers = express.Router();
const userSchema = require('./modules/SignUpModule.js');
const Restaurant = require('./modules/resturantModule.js')
const Category = require('./modules/CategoryModules.js')
const { routes } = require('./server.js');
const db = require('./db.js');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const withAuth = require('./middleware');



// deafult route
routers.get('/', function (req, res, next) {
  res.send('hello world ');
});


// SignUP rout / post data 
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


//LogIn route 
routers.post('/login', (req, res) => {
  // console.log('login worked')
  const { Email, Password } = req.body;
  userSchema.findOne({
    where: { Email, Password },
  })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(err, "error"));
})


// create category
routers.post('/createCat', (req, res) => {
  console.log(req.body)
  let categ = new Category({
    Name: req.body.Name,
    Image: req.body.Image
  })
  categ.save((err, categ) => {
    if (err) return res.status(404).json({ error })
    res.status(201).json({ id: categ._id })
  })
})

// create restaurant
routers.post('/createRes', (req, res) => {

  let restau = new Restaurant({
    resCategory: req.body.resCategory,
    Name: req.body.Name,
    Image: req.body.Image,
    Phone: req.body.Phone,
    Address: req.body.Address
  })
  restau.save((err, restau) => {
    if (err) return res.status(404).json({ error })
    res.json(restau)
  })
})


//find  restaurant  by name 
routers.post('/restFind', (req, res) => {
  Restaurant.findOne({ Name: req.body.Name })
    .populate('resCategory')
    .exec((err, rest) => {
      if (err) return res.status(404).json({ success: false })
      res.json(rest)
    })
})

//find  restaurant  by id
routers.post('/restFindById', (req, res) => {
  Restaurant.findOne({ _id: req.body._id })
    .populate('resCategory')
    .exec((err, rest) => {
      if (err) return res.status(404).json({ success: false })
      res.json(rest)
    })
})


//find  restaurants  by  category id
routers.post('/FindAllResById', (req, res) => {
  Restaurant.find({ resCategory: req.body.resCategory })
    .populate('resCategory')
    .exec((err, rest) => {
      if (err) return res.status(404).json({ success: false })
      res.json(rest)
    })
})

routers.get("/auth", withAuth, (req, res) => {
  console.log(req.userSchema)
  if (req.userSchema) {
    res.json({
      id: req.userSchema._id,
      UserName: req.userSchema.UserName,
      Password: req.userSchema.Password,
      Email: req.userSchema.Email
    })
  }
})

//authontication 
routers.post('/authenticate', function (req, res) {
  const { email, password } = req.body;
  userSchema.findOne({ email }, function (err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
          error: 'Internal error please try again'
        });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
            });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
            });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      });
    }
  });
});

routers.get('/secret', withAuth, function (req, res) {           // for the secret
  res.send('The password is flower');
});

//route will return a 200 HTTP status if our requester has a valid token
routers.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
})



module.exports = routers;
