var mongoose = require('mongoose');
var Comment = mongoose.model('Comment')
var Message = mongoose.model('Message')

module.exports = {
	index: function(req, res) {
		Message.find({})
         .populate('comments')
         .exec(function(err,messages){
	          if(err){
	            console.log(err)
	          } else{
	            console.log(messages)
	            res.render('index', {messages: messages})
	          }
    			})
  },
 create: function(req, res) {
 	 console.log('in the create route')
  //create new instannce of message
	  var myMessage = new Message({name: req.body.name, message: req.body.message});
	  myMessage.save(function(err,myMessage){
	    //err is true if there is an instance of it, false if undefined
	    if(err){
	      console.log(err)
	      res.redirect('/')
	    } else{
	      console.log('message saved', myMessage)
	      res.redirect('/')
	    }
	  })
  }
}