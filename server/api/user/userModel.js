var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    phone:{
        type:String,
        required:true
    },
    dateOfRegistration:{
        type:Date,
        default:Date.now
    },
    password:{
        type:String,
        required:true
    },
    active: Boolean
});
module.exports = mongoose.model('user',UserSchema);


