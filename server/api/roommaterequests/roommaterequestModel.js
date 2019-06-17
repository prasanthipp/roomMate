var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roommateRequestSchema =new Schema({
   
        userId: mongoose.Schema.Types.ObjectId,
        location:String,
        city:String,
        gender:String,
        rent:Number,
        numberOfRoommates:Number,
        dateOfRequest:{
            type:Date,
            default:Date.now
        }
    
    })
    

module.exports = mongoose.model('RoommateRequest',roommateRequestSchema);
