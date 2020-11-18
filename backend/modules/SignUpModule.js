const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const userSchema = new mongoose.Schema({
  UserName: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true, unique: true }
})

userSchema.pre('save', function (next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified('Password')) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.Password, saltRounds,
      function (err, hashedPassword) {
        if (err) {
          next(err);
        }
        else {
          document.Password = hashedPassword;
          next();
        }
      });
  } else {
    next();
  }
});

// to authenticate users against our database
userSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}


module.exports = mongoose.model('usertable', userSchema);