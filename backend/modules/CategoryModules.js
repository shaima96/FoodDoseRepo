var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var fastFoodSchema = new Schema({
    RestaurantID: {type: Schema.Types.ObjectId},
    Name: String,
    Image: String
});

var FastFood = mongoose.model("FastFood", fastFoodSchema);

var Food1 = new FastFood({
    RestaurantID: 1,
    Name: "KFC",
    Image: "Bombus"
});

Food1.save(function (error) {
    console.log("Your bee has been saved!");
    if (error) {
        console.error(error);
    }
});