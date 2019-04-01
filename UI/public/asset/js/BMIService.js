var BMIService = {

	getIndex: function(weight, height, callback) {
		$.ajax({
		  url: 'http://localhost:3000/api/bmi', //end-point to backend
		  data: {'weight': weight, 'height': height},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index, callback) {
		$.ajax({
			url: 'http://localhost:3000/api/bmi/description', //end-point to backend
			data: {'index': index},
			success: function(result) {
				callback(result);
			},
			error: function() {
				callback(null);
			}
		  });
	  }
	
};
