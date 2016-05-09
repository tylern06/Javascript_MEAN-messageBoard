var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  name: {type: String, required: true},
  message: {type: String, required: true},
  //reference a type Comment Object by id in a array
  //Message has many comments
  comments: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'} ]
}, {timestamps: true})

var CommentSchema = new mongoose.Schema({
  name: {type: String, required: true},
  comment: {type: String, required: true},
  //comment belongs to a message
  _message: {type: mongoose.Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps:true})

// we can add validations using the .path() method. Needs to match the field in the schema
MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('message').required(true, 'Message cannot be blank');
// we can add validations using the .path() method. Needs to match the field in the schema
CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('comment').required(true, 'Comment cannot be blank');

var Message = mongoose.model('Message', MessageSchema)
var Comment = mongoose.model('Comment', CommentSchema)

