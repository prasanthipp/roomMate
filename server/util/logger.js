//no var needed here,colors will attached colors
//to string.prototype
require('colors');
var _ = require('lodash');

var config = require('../config/config');
//create no operation fn for when loggin is disabled
var noop=function(){};

var consoleLog = config.logging ? console.log.bind(console) : noop;

var logger = {
    log:function(){

        var args= _.toArray(arguments)
        .map(function(arg){
            if(typeof arg === 'object'){
                var string = JSON.stringify(arg,2);
                return string.magenta;
            }else{
                arg+= '';
                return arg.magents;
            }
        });
        
        consoleLog.apply(console,args);
    }
};
module.exports= logger;