// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var todos = require('./routes/routes');
// MongoDB
mongoose.connect('mongodb://localhost/TailorDB', function(err){
    if(err){
        console.log("DB connection Error");
    }
    else{
        console.log("DB connection Success");
    }
});

// Express
var app = express();
/*app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());*/
/*var personSchema = {
    od : Number,
    name : String,
    model : String,
    price : Number,
    release_date : Number
}

var Person = mongoose.model("Person", personSchema, 'MobileData');*/
// Configuration
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use("/", function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});
app.use('/images', express.static(__dirname+'/images'));
    
    
app.use(todos);
    
app.all("*", function(req, res){
    res.send("Sorry Not Found");
});

// Start server
app.listen(3000);
console.log('Listening on port 3000...');