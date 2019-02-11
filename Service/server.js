const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000

var corsOptions = {
  origin: 'http://localhost:8080',
}

app.use(cors(corsOptions));

app.get('/api/bmi', function(req, res) {
	var
		weight = parseFloat(req.query.weight),
		height = parseFloat(req.query.height),
		BMIService = require('./app/BMIService'),
		bmiIndex = 0;
	
	bmiIndex = BMIService.getIndex(weight, height);
	
	res.send(bmiIndex.toString());
});

const server = app.listen(PORT, function () {
  const host = server.address().address;
	const port = server.address().port;

  console.log('BMI service listening at http://%s:%s', host, port);
});