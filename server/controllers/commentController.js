var mongoose = require('mongoose');
var Comment = mongoose.model('Comment')
var Message = mongoose.model('Message')

module.exports = {
	create: function(req,res) {
		console.log('in comment controller')
		console.log(req.params)
		 Message.findOne({_id: req.params.message_id }, function(err, message){
	    console.log(message)
	    //2) create new instance of the comment with the message_id
	    var comment = new Comment({
	      name: req.body.name,
	      comment: req.body.comment,
	      _message: message._id
	      }
	    );
	    comment.save(function(err,comment){
	      console.log(err)
	      if(err) {
	        res.json(err)
	        // res.redirect('/')
	      } else {
	        message.comments.push(comment._id)
	        message.save(function(err,message){
	          console.log('Saved comments into message!!')
	          res.redirect('/')
	        })
	      }
	    })
	  })
	}
}