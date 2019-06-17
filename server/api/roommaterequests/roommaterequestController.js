
var Roommate = require('./roommaterequestModel');

var _ = require('lodash');


exports.get = function (req, res, next) {
    
    Roommate.find({})
        .then(function (roomates) {
            res.json(roomates);
        }, function (err) {
            next(err);
        });

};



exports.post = function (req, res, next) {
    var newRoommate = req.body;
    Roommate.create(newRoommate)
    .then(function (roomates) {
        res.json(roomates);
    }, function (err) {
        next(err);
    });

};
