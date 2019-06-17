
var Room = require('./roomsModel');

var _ = require('lodash');


exports.get = function (req, res, next) {
    
    Room.find({})
        .then(function (rooms) {
            res.json(rooms);
        }, function (err) {
            next(err);
        });

};



exports.post = function (req, res, next) {
    var newRoom = req.body;
    Room.create(newRoom)
    .then(function (rooms) {
        res.json(rooms);
    }, function (err) {
        next(err);
    });

};

