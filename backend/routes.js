const express = require('express');
const routers = express.Router();
const userSchema = require('./modules/SignUpModule.js');
const CategoryControls = require('./controller/categoryController.js');
const RestaurantControls = require('./controller/restaurantController.js');
const Restaurant = require('./modules/resturantModule.js')
const Category = require('./modules/CategoryModules.js')
const { routes } = require('./server.js');
const db = require('./db.js')





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


// routers.get('/categories',CategoryControls.all)
// routers.get('/categories/create',CategoryControls.create) // To create new Category 
// routers.get('/categories/:name',CategoryControls.find)
// routers.get('/categories/:CategoryID',CategoryControls.findId)
// routers.get('/categories/:name/restaurants',CategoryControls.getAllRestaurant)
// routers.get('/restaurants', RestaurantControls.all)
// routers.get('/restaurants/:name/create', RestaurantControls.create) // To create new Restuarant



// create category
routers.post('/createCat', (req, res) => {
    console.log(req.body)
        let categ = new Category({
            Name:req.body.Name,
            Image:req.body.Image
        })
        categ.save((err,categ) =>{
            if(err) return res.status(404).json({error})
            res.status(201).json({id:categ._id})
        })
    })
   
// create restaurants 
routers.post('/createRes', (req, res) => {
    
        let restau = new Restaurant({
            resCategory : req.body.resCategory,
            Name: req.body.Name,
            Image: req.body.Image,
            Phone:req.body.Phone,
            Address:req.body.Address
        })
        restau.save((err,restau) => {
            if(err) return res.status(404).json({error})
            res.json(restau)
        })
    })
   

    //find  restaurant  by name 
    
    routers.post('/restFind' , (req,res) =>{
    
    Restaurant.findOne({ Name:req.body.Name })
        .populate('resCategory')
        .exec( (err,rest) => {
            if(err) return res.status(404).json({success:false})
            res.json(rest)
        } )
})


 //find  restaurant  by id
routers.post('/restFind' , (req,res) =>{
    
    Restaurant.findOne({ id : req.body.id })
        .populate('resCategory')
        .exec( (err,rest) => {
            if(err) return res.status(404).json({success:false})
            res.json(rest)
        } )
})








// routers.post('/resturant', (req, res) => {
//     console.log("arrrive ")
//     Restaurant.findOne({ _id: req.body.ObjectId })
//     console.log("hhhhhhhhhhhhhhhhhh")
//         .populate('category')
//         .exec((err, restaurant) => {
//             if (err) return res.status(400).send(err)
//             res.status(200).json(restaurant)
//         })

// })

// routers.get('/resturant', (req, res) => {
//     Restaurant.findById("5fb28113f156fb3208a808f4")
//         .populate('category')
//         .exec((err, restaurant) => {
//             if (err) return res.status(400).send(err)
//             res.status(200).json(restaurant)
//         })

// })


// routers.get('/shimaa', (req, res) => {

// Category
//    .findOne({_id:categoryId })
//    .populate(" restaurants") // key to populate
//    .then(restaurant => {
//       res.json(restaurant); 
//    });
// })










module.exports = routers;
