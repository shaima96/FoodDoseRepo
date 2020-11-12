// Connect Mongoose to our local MongoDB via URI specified above and export it below
const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://admin:admin0000@cluster0.v0kln.mongodb.net/fooddose?retryWrites=true&w=majority';

const Connect = mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected'))
    .catch((err) => console.log('error'))


const db = mongoose.connection
db.once('open', () => {
    console.log('dbconnected')
})
module.exports=db;

