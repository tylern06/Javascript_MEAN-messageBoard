var mongoose = require('mongoose');

var messages = require('../controllers/messageController.js')
var comments = require('../controllers/commentController.js')

var errors = [];

module.exports = function(app) {
	app.get('/', function(req,res){
		console.log('in the / route')
		messages.index(req,res);  
	})

	app.post('/create_message', function(req,res){
		messages.create(req,res);
	})

	app.post('/create_comment/:message_id', function(req,res){
	  //1) find message(parent) id that the comment is referenced to
	 	comments.create(req,res)
	})
}