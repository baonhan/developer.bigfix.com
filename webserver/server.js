var express = require('express');
var exphbs = require('express3-handlebars');
var path = require('path');
var http = require('http');

var app = express();

app.engine('hbs', exphbs({defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'deps')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/evaluate', function (req, res) {
  http.get('http://ec2-204-236-174-221.us-west-1.compute.amazonaws.com?q=' + encodeURIComponent(req.query.q), function (upstreamRes) {
    upstreamRes.pipe(res);
  }).on('error', function (error) {
    res.status(502).send(error.message);
  });
});

app.get('/', function (req, res) {
  res.render('home');
});

var port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1');

console.log('Listening on port ' + port);