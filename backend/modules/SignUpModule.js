const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    UserID: { type: Number, unique: true },
    UserName: { type: String, required:true },
    Password: { type: String, required:true },
    Email: { type: String, required:true }
})
module.exports=mongoose.model('usertable',userSchema);