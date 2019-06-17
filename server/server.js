var express = require('express');
var app= express();
var api = require('./api/api'); //router
var err = require('./middleware/err');
//setup yhe app middleware
require('./middleware/appMiddleware')(app);

//setup api
app.use('/api',api);
app.use(err);
//setup glaobal error handling

//export the app for testing
module.exports = app;