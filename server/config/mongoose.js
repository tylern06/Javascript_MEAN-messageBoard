var mongoose = require('mongoose');
// Require path
var path = require("path");
var fs = require('fs');


mongoose.connect('mongodb://localhost/messageBoard');

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0) {
		require(models_path + '/' + file);
	}
});