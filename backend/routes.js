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




routers.get('/', function (req, res, next) {
    res.send('hello world ');
});

//Home rout 
// routers.post('/', function (req, res) {  
// });

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

routers.post('/fastfoodres', (req, res) => {

})

routers.post('/fastfoodres/royal', (req, res) => {

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

// create restaurants 
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

///////////////////
// routers.post('/catFind', (req, res) => {

//   Category.findOne({ Name: req.body.Name })
//       .populate('catRestaurants')
//       .exec((err, cate) => {
//           if (err) return res.status(404).json({ success: false })
//           res.json(cate)
//       })
// })
// routers.post('/catFind', (req, res) => {
// Restaurant.
//   find().
//   populate({
//     path: 'resCategory',
//     match: { Name: req.body.Name },
//     // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
//     select: 'Name'
//   }).
//   exec();
// })
/////////////////////







//find  restaurant  by id
routers.post('/restFind/:id', (req, res) => {
    Restaurant.findOne({ id: req.body.id })
        .populate('resCategory')
        .exec((err, rest) => {
            if (err) return res.status(404).json({ success: false })
            res.json(rest)
        })
})


// POST route to register a user
routers.post('/register', function(req, res) {
    const { userName,email, password } = req.body;
    const user = new userSchema({ email, password,userName });
    user.save(function(err) {
      if (err) {
        res.status(500)
          .send("Error registering new user please try again.");
      } else {
        res.status(200).send("Welcome to the FoodDoose!");
      }
    });
  });

 
  //authontication 
  routers.post('/authenticate', function(req, res) {
    const { email, password } = req.body;
    userSchema.findOne({ email }, function(err, user) {
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
        user.isCorrectPassword(password, function(err, same) {
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

  routers.get('/secret', withAuth, function(req, res) {           // for the secret
    res.send('The password is flower');
  });

  //route will return a 200 HTTP status if our requester has a valid token
  routers.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
  })

  routers.get('/AU', withAuth, function(req, res) {
    console.log(req.userSchema)
    res.sendStatus(200);
  })


module.exports = routers;
