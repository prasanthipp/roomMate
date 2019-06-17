// // TODO: create a basic server with express
// // that will send back the index.html file on a GET request to '/'
// // it should then send back jsonData on a GET to /data
// var express=require('express');
// var bodyParser = require('body-parser');
// var app=express();
// var _ = require('lodash');

// var lionRouter = require('./server/lions');
// //import lionRouter from './server/lions.js';

// //..........
// var jsonData = {count: 12, message: 'hey'};

// app.get('/',function(req,res){
//     res.sendFile(__dirname + '/index.html',function(err){
//         if(err){
//             res.status(500).send(err);
//         }
//     })
// });

// app.get('/data',function(req,res){
    
    
    
//     res.json(jsonData);
// });
// //............


// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// //this is called mounting.whenever a req comes in for
// //'/lion' we want to use this router
// app.use('/lions',lionRouter);
 
// var lions = [];
// var id = 0;

// var updateId = function(req,res,next){
//     if(!req.body.id){
//         id++;
//         req.body.id = id + '';
//     }
//     next();
// };

// app.param('id',function(req,res,next,id){
//     var lion = _.find(Lions, {id: id});
//     if(lion){
//         req.lion= lion;
//         next();
//     }
//     else{
//         res.send();
//     }
// });
// app.get('/lions',function(req,res){
//     lions.push({id:1, name:'Liger', Gender: 'Male'});
//     res.json(lions);
// });

// app.get('/lions/:id', function(req,res){
//     //var lion = _.find(Lions, {id: req.params.id});
//    var lion = req.lion;
//     res.json(lion || {});

// });

// app.post('/lions',updateId,function(req,res){
//       var lion = req.body;
//    //   id++;
//    //   lion.id = id + '';

//       lions.push(lion);

//       res.json(lions);
// });

// app.put('/lions/:id',function(req,res){
//     var update=req.body; 
//     if(update.id){
//         delete update.id;
//     }
//     var lion = _.findIndex(lions,{id:req.params.id});
//     if(!lions[lions]){
//         res.send();
//     }else {
//         var updatedLion = _.assign(lions[lion],update);
//         res.json(updatedLion);
//     }
// });

// app.use(function(err,req,res,next){
//     if(err){
//         console.log('err.message');
//         res.status(500).send(err);
//     }
// });



// var port=3000;
// app.listen(port,function(){
//     console.log('listening on http://localhost:', port);
// });




