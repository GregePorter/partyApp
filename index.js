// Module dependencies. 
var express = require('express');
var http = require('http');
//var site = require('./controllers/site');

//create a new express app
var app = express();

//Config
app.configure(function(){
  	app.set('port', process.env.PORT || 3000);
  	app.use(express.static(__dirname + '/public')); 
  	app.set('views', __dirname + 'js/views');
  	app.set('view engine', 'jade');
  	app.use(express.bodyParser()); // ???
  	app.use(express.logger('dev')); //dev, short, default, tiny
});


//SITE ROUTES
//app.get('/', site.home);

//create server:port
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
