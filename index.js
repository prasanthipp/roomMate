
//var express=require('express');
var config = require('./server/config/config');
var app= require('./server/server');//express();//require('./server/server');

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");
//setup config
var logger = require('./server/util/logger');


 //app.listen(3000,function(){
 //       logger.log('listening on http://localhost:', +config.port);
 //     });
    app.listen(3006||config.port);
    //logger.log('listening on http://localhost:' +config.port);