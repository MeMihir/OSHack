const mongoose      = require('mongoose');
const passport      = require('passport');
const passLocalMongo= require('passport-local-mongoose');

const UserSchema    = new mongoose.Schema({
    username    : String,
    fname       : String,
    lname       : String,
    password    : String,
    email       : String,
    occupation  : String,
    location    : String,
    reviews     : [{
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'Review'
    }]
});

UserSchema.plugin(passLocalMongo);
module.exports  = mongoose.model('User', UserSchema);