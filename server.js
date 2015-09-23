var express = require('express');
var app = express();

//to provide static files to web browser
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.get('/api/bmi', function(req, res) {
	var
		weight = parseFloat(req.query.weight),
		height = parseFloat(req.query.height),
		BMIService = require('./app/BMIService'),
		bmiIndex = 0;
	
	bmiIndex = BMIService.getIndex(weight, height);
	
	res.send(bmiIndex.toString());
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});