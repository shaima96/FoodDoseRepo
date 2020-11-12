// Connect Mongoose to our local MongoDB via URI specified above and export it below
const mongoose = require('mongoose');
const mongoUri = 'mongodb://shaima:1996@cluster0.cozaa.mongodb.net/Cluster0?retryWrites=true&w=majority';

const Connect = mongoose.connect(mongoUri, {
    useNewUrlParser: true,
})
    .then(() => console.log('connected'))
    .catch((err) => console.log('error'))


const db = mongoose.connection
db.once('open', () => {
    console.log('dbconnected')
})
