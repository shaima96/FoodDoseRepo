var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    RestaurantID:
    {
        type: Number
    },
    Name:
    {
        type: String
    },
    Image:
    {
        type: String
    },
    Phone:
    {
        type: String
    },
    Address:
    {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});


let Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant