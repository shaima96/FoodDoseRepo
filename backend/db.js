const mongoose = require('mongoose');
var url = "mongodb+srv://admin:admin0000@cluster0.diesu.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
    console.log('connection sucessful')
})
module.exports = db