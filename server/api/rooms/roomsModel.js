var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomsSchema =new Schema({
   
        userId: mongoose.Schema.Types.ObjectId,
        phone:Number,
        noOfRooms:Number,
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
    

module.exports = mongoose.model('room',roomsSchema);
