var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    CategoryID:
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
    restaurants:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }]
});



let Category = mongoose.model('Category', CategorySchema);

module.exports = Category