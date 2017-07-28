'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3000;


app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'Access-Control-Allow-Methods');
	res.setHeader('Access-Control-Allow-Headers',
		'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

	//and remove cacheing so we get the most recent comments
	res.setHeader('Cache-Control', 'Cache-Control');
	next();
});

app.get('/',function(req,res){
	console.log('Time:', Date.now());
})

app.get('/api',function(req,res){
	res.json({ message: 'API Initialized!'});
});

//now we can set the route path & initialize the API
router.get('/api',function(req,res){
	res.json({ message: 'API Initialized!'});
});


//starts the server and listens for requests
app.listen(port, function(){
	console.log(`api running on port ${port}`);
});











