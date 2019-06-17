
var User = require('./userModel');

var _ = require('lodash');


exports.get = function (req, res, next) {
    
    User.find({})
        .then(function (users) {
            res.json(users);
        }, function (err) {
            next(err);
        });

};



exports.post = function (req, res, next) {
    var newUser = req.body;
    User.create(newUser)
    .then(function (user) {
        res.json(users);
    }, function (err) {
        next(err);
    });

};

