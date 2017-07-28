'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./model/comments');

var app = express();
var router = express.Router();

var port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost/comments');
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function(){
	// we're connected!

})


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
	res.setHeader('Content-Type', 'application/json');
	next();
});


router.use(function timeLog(req,res,next){
	console.log('Time:', Date.now());
	next();
});

//Router Homepage
router.get('/',function(req,res){
	res.send('Welcome to Home page!');
});

//now we can set the route path & initialize the API
router.get('/api',function(req,res){
	res.json({ message: 'API Initialized!'});
});

router.get('/comments',function(req,res){
	Comment.find(function(err,comments){
		if (err) {
			res.send(err)
		}
		else{
			res.json(comments)
		}
	})
});

router.post('/comments',function(req,res){
	var comment = new Comment();
	comment.author = req.body.author;
	comment.text = req.body.text;

	comment.save(function(err){
		if (err) 
		res.send(err);
		res.json({message: 'Comment successfully added!'});
	})
});


app.use('/',router);


//starts the server and listens for requests
app.listen(port, function(){
	console.log(`api running on port ${port}`);
});











