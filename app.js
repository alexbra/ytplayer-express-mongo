var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");

mongoose.connect("localhost:27017/your_database");
var db = mongoose.connection;
var app = express();

var videoSchema = mongoose.Schema({
    id: Number,
    name: String,
    url: String,
    top: Boolean
});
var Video = mongoose.model('video', videoSchema);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', express.static(__dirname + '/'));
app.get('/videos', function(req, res, next) {
  Video.find({}, function(err, docs) {
      if(err) return console.error(err);
      res.json(docs);
  });
});
app.post('/videos', function(req, res) {
    var obj = new Video(req.body);
    obj.save(function(err, obj) {
        if(err) return console.error(err);
        res.status(200).json(obj);
    });
});

app.delete('/videos/:id', function(req, res) {
    Video.findOneAndRemove({id: req.params.id}, function(err) {
        if(err) return console.error(err);
        res.sendStatus(200);
    });
});

app.put('/videos/:id', function(req, res) {
    Video.findOneAndUpdate({id: req.params.id}, req.body, function(err) {
        if(err) return console.error(err);
        res.sendStatus(200);
    })
});

app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = app;
