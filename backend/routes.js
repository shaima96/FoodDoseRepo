const express = require('express');
const routers = express.Router();
const { User } = require('./modules/SignUpModule.js');
const Restaurant = require('./modules/resturantModule.js')
const Category = require('./modules/CategoryModules.js')
const { routes } = require('./server.js');
const db = require('./db.js');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const auth = require('./middleware');
const bcrypt = require('bcrypt');


const secret = 'mysecretsshhh'; // for auth

// deafult route
routers.get('/', function (req, res, next) {
  res.send('hello world ');
});

// SignUP rout / post data 
routers.post('/signup', (req, res) => {
  const Password = req.body.Password
  const saltRounds = 10
  let data = req.body

  User.findOne({ Email: req.body.Email })
    .then(user => {
      if (user) return res.json({ message: "email already exists" })

      bcrypt.genSalt(saltRounds)
        .then((salt) => bcrypt.hash(Password, salt))
        .then((hashedPassword) => {
          data.Password = hashedPassword
          let user = new User(data)
          user.save()
            .then((data) => jwt.sign({ id: data._id }, 'secret', { expiresIn: 90000 }, (err, token) => {
              res.header("jwt-auth", token).json({
                sucess: true,
                token: token
              })
            }))
            .catch(err => res.status(404).send(err))
        })
    })
    .catch(err => res.send(err))
})




//LogIn route 
routers.post('/login', (req, res) => {

  User.findOne({ Email: req.body.Email })
    .then(data => {
      if (data) {
        bcrypt.compare(req.body.Password, data.Password)
          .then(data1 => {
            if (data1) {
              jwt.sign({ id: data._id }, 'secret', { expiresIn: 90000 }, (err, token) => {
                if (err) return res.json({ message: "err creating the token" })
                res.header("jwt-auth", token).json({
                  sucess: true,
                  token: token
                })
              })
            } else {
              throw Error("incorrect password")
            }
          })
      } else {
        throw Error("incorrect email")
      }
    })
    .catch(err => res.status(404).send(err))
})

routers.get('/fastfoodres/royal/:id', (req, res) => {
  Restaurant.find()
  .then((cato) => res.status(200).send(cato))
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
    if (err) return res.status(404).json({error:err})
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

// get user detail 
routers.post("/getuser", (req, res) => {
  User.findOne({ UserName: req.body.UserName })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send("error"))
})

routers.get("/auth", auth, (req, res) => {
  console.log(req.user)
  if (req.user) {
    res.json({
      id: req.user._id,
      UserName: req.user.UserName,
      Password: req.user.Password,
      Email: req.user.Email
    })
  }
})


routers.get('/secret', auth, function (req, res) {           // for the secret
  res.send('The password is flower');
});

//route will return a 200 HTTP status if our requester has a valid token
routers.get('/checkToken', auth, function (req, res) {
  res.sendStatus(200);
})

routers.get("/logout", (req, res) => {
  res.header("jwt-auth", "", { maxAge: 1 }).json({
    token: ""
  })
})


  //find  restaurant  by id
  routers.post('/restCategoryById/:id', (req, res) => {
    Restaurant.findOne({ _id: req.body._id })
      .populate('resCategory')
      .exec((err, rest) => {
        if (err) return res.status(404).json({ success: false })
        res.json(rest)
      })
  });



 module.exports = routers;
