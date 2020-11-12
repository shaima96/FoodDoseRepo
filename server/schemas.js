const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    UserID: { type: Number, unique: true },
    UserName: String,
    Password: String,
    Email: String
})

const foodSchema = mongoose.Schema({
    FoodID: { type: Number, unique: true },
    Name: String,
    Price: String,
    image: String
})
const resturantSchema = mongoose.Schema({
    ResturantID: { type: Number, unique: true },
    Name: String,
    Category: String,
    image: String,
    Phone: Number,
    Address:String
})

const foodResturantSchema = mongoose.Schema({
    ResturantID: { type: Number, unique: true },
    FoodID: { type: Number, unique: true }
   
})




    // export default mongoose.model('messagescontents',FoodSchema)
