//  FaktorZ sample Node application
var express = require('express'),
    fs      = require('fs'),
    app     = express(),
    eps     = require('ejs'),
    morgan  = require('morgan');

app.engine('html', require('ejs').renderFile);
//app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var path  = require("path");

app.use(express.static(__dirname));
//app.use(express.static(path.join(__dirname, '_images')));
//app.use(express.static(path.join(__dirname, '_javascripts')));
//app.use(express.static(path.join(__dirname, '_stylesheets')));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/welcome/index.html');
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
//console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
