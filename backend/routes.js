const express = require('express');
const routers = express.Router();
const userSchema = require('./modules/SignUpModule.js');
const CategoryControls = require('./controller/categoryController.js');
const RestaurantControls = require('./controller/restaurantController.js');
const Restaurant = require('./modules/resturantModule.js')
const Category = require('./modules/CategoryModules.js')
const { routes } = require('./server.js');






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


routers.get('/categories',CategoryControls.all)
routers.get('/categories/create',CategoryControls.create) // To create new Category 
// routers.get('/categories/:name',CategoryControls.find)
// routers.get('/categories/:name/restaurants',CategoryControls.getAllRestaurant)
// routers.get('/restaurants', RestaurantControls.all)
routers.get('/restaurants/:name/create', RestaurantControls.create) // To create new Restuarant




routers.post('/createRes', (req, res) => {
    req.body.forEach((restaurant) => {
        let restau = new Restaurant(restaurant)
        restau.save()
    })
    res.send('done restaurant')

})


routers.post('/createCat', (req, res) => {
    req.body.forEach((category) => {
        let categ = new Category(category)
        categ.save()
    })
    res.send('done category ')

})

routers.get('/resturants', (req, res) => {
    Restaurant.find()
        .populate('category')
        .exec((err, restaurants) => {
            if (err) return res.status(400).send(err)
            res.status(200).json(restaurants)
        })

})

routers.post('/resturant', (req, res) => {
    Restaurant.findOne({ _id: req.body.ObjectId })
        .populate('category')
        .exec((err, restaurant) => {
            if (err) return res.status(400).send(err)
            res.status(200).json(restaurant)
        })

})

// routers.get('/resturant', (req, res) => {
//     Restaurant.findById("5fb28113f156fb3208a808f4")
//         .populate('category')
//         .exec((err, restaurant) => {
//             if (err) return res.status(400).send(err)
//             res.status(200).json(restaurant)
//         })

// })


module.exports = routers;
