var BMIService = {

	getIndex: function(weight, height) {
		if(typeof(weight) === 'number' && typeof(height) === 'number') {
			return weight / (height * height);
		}
		return null;
	},
	
	Category: Object.freeze({
		VERY_SEVERILY_UNDERWEIGHT : {
			description: "Very severely underweight",
			from: NaN,
			to: 14.99
		},
		SEVERILY_UNDERWEIGHT: {
			description: "Severely underweight",
			from: 15.00,
			to: 15.99
		},
		UNDERWEIGHT: {
			description: "Underweight",
			from: 16.00,
			to: 18.49
		},
		NORMAL: {
			description: "Normal (healthy weight)",
			from: 18.50,
			to: 24.99
		},
		OVERWEIGHT: {
			description: "Overweight",
			from: 25.00,
			to: 29.99
		},
		OBESE_CLASS_1 : {
			description: "Moderately obese",
			from: 30.00,
			to: 34.99
		},
		OBESE_CLASS_2 : {
			description: "Severely obese",
			from: 35.00,
			to: 39.99
		},
		OBESE_CLASS_3 : {
			description: "Very severely obese",
			from: 40.00,
			to: 44.99
		},
		OBESE_CLASS_4 : {
			description: "Morbidly Obese",
			from: 45.00,
			to: 49.99
		},
		OBESE_CLASS_5 : {
			description: "Super Obese",
			from: 50.00,
			to: 59.99
		},
		OBESE_CLASS_6 : {
			description: "Hyper Obese",
			from: 60.00,
			to: NaN
		},
	}),

	getCategory: function(index) {
		if (index <= this.Category.SEVERILY_UNDERWEIGHT.to) {
			return this.Category.SEVERILY_UNDERWEIGHT;
		}
		if (index >= this.Category.UNDERWEIGHT.from && 
			index <= this.Category.UNDERWEIGHT.to) {
			return this.Category.UNDERWEIGHT;
		}
		if (index >= this.Category.NORMAL.from && 
			index <= this.Category.NORMAL.to) {
			return this.Category.NORMAL;
		}
		if (index >= this.Category.OVERWEIGHT.from && 
			index <= this.Category.OVERWEIGHT.to) {
			return this.Category.OVERWEIGHT;
		}
		if (index >= this.Category.OBESE_CLASS_1.from && 
			index <= this.Category.OBESE_CLASS_1.to) {
			return this.Category.OBESE_CLASS_1;
		}
		if (index >= this.Category.OBESE_CLASS_2.from && 
			index <= this.Category.OBESE_CLASS_2.to) {
			return this.Category.OBESE_CLASS_2;
		}
		if (index >= this.Category.OBESE_CLASS_3.from && 
			index <= this.Category.OBESE_CLASS_3.to) {
			return this.Category.OBESE_CLASS_3;
		}
		if (index >= this.Category.OBESE_CLASS_4.from && 
			index <= this.Category.OBESE_CLASS_4.to) {
			return this.Category.OBESE_CLASS_4;
		}
		if (index >= this.Category.OBESE_CLASS_5.from && 
			index <= this.Category.OBESE_CLASS_5.to) {
			return this.Category.OBESE_CLASS_5;
		}
		return this.Category.OBESE_CLASS_6;
	},

	getDescription: function (index) {
		return this.getCategory(index).description;
	}
	
};

module.exports = BMIService;