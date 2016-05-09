// Require the Express Module
var path = require("path");
var express = require("express");
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require("body-parser");
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({extended:true}));

// this should match the name of the db you are going to use for your project.
// Setting our Static Folder Directory
// app.use(express.static(__dirname + "./static"));
app.use(express.static(path.join(__dirname, "./static")));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

require('./server/config/mongoose.js')

var routes_setter = require('./server/config/routes.js')
routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
