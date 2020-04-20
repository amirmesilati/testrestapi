var port = process.env.PORT || 3000;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello Get World Develop!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello Post World Develop!"
  });
});

app.listen(port);
module.exports = app;
