var BMIController = {
	
	init: function() {
		BMIController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			BMIController.calculateBMI(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	calculateBMI: function(form) {
		var 
			weight = parseFloat(form.weight.value),
			height = parseFloat(form.height.value),
			result = 0;
		
		var descriptionCallback = function(result) {
			BMIController.showDescription(result);
		};
	
		var bmiCallback = function(result) {
			BMIService.getDescription(result, descriptionCallback);
			BMIController.showResult(result);
		};
		
		BMIController.showLoading(true);
		BMIService.getIndex(weight, height, bmiCallback);
	},
	
	showResult: function(result) {
		var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result.toFixed(2);
		BMIController.showLoading(false);
	},
	
	showDescription: function(result) {
		var spanResult = document.querySelector('.description');
		spanResult.innerHTML = result;
	},

	showLoading: function(isLoading) {
		document.querySelector('.label').innerHTML = isLoading ? 'loading...' : 'BMI Result'
	}

};

//initialization
BMIController.init();
