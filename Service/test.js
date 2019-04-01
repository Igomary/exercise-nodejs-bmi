const BMIService = require('./app/BMIService.js');
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

it('check getIndex with valid values', () => {
    var weights = [ 45.0, 50.0, 55.0, 60.0, 65.0, 70.0, 75.0, 80.0,
                    85.0, 90.0, 95.0, 100.0, 105.0, 110.0, 115.0, 
                    120.0, 125.0, 130.0, 135.0, 140.0 ];
    var h = 1.7;

    weights.forEach(function(w) {
        assert.equal(BMIService.getIndex(w, h).toFixed(2), (w/(h*h)).toFixed(2));
    });
});

it('getIndex - division by zero', () => {
    expect(BMIService.getIndex(75, 0)).equal(Infinity);
});

it('call getIndex with non-number parameters', () => {
    expect(BMIService.getIndex("foo", "bar")).equal(null);
});

it('check ranges of categories', () => {
    expect(BMIService.getCategory(10)).equal(BMIService.Category.SEVERILY_UNDERWEIGHT);
    expect(BMIService.getCategory(14)).equal(BMIService.Category.SEVERILY_UNDERWEIGHT);
    expect(BMIService.getCategory(15.99)).equal(BMIService.Category.SEVERILY_UNDERWEIGHT);

    expect(BMIService.getCategory(16)).equal(BMIService.Category.UNDERWEIGHT);
    expect(BMIService.getCategory(18.49)).equal(BMIService.Category.UNDERWEIGHT);

    expect(BMIService.getCategory(18.50)).equal(BMIService.Category.NORMAL);
    expect(BMIService.getCategory(24.99)).equal(BMIService.Category.NORMAL);

    expect(BMIService.getCategory(25)).equal(BMIService.Category.OVERWEIGHT);
    expect(BMIService.getCategory(29.99)).equal(BMIService.Category.OVERWEIGHT);

    expect(BMIService.getCategory(30)).equal(BMIService.Category.OBESE_CLASS_1);
    expect(BMIService.getCategory(34.99)).equal(BMIService.Category.OBESE_CLASS_1);

    expect(BMIService.getCategory(35)).equal(BMIService.Category.OBESE_CLASS_2);
    expect(BMIService.getCategory(39.99)).equal(BMIService.Category.OBESE_CLASS_2);

    expect(BMIService.getCategory(40)).equal(BMIService.Category.OBESE_CLASS_3);
    expect(BMIService.getCategory(44.99)).equal(BMIService.Category.OBESE_CLASS_3);

    expect(BMIService.getCategory(45)).equal(BMIService.Category.OBESE_CLASS_4);
    expect(BMIService.getCategory(49.99)).equal(BMIService.Category.OBESE_CLASS_4);

    expect(BMIService.getCategory(50)).equal(BMIService.Category.OBESE_CLASS_5);
    expect(BMIService.getCategory(59.99)).equal(BMIService.Category.OBESE_CLASS_5);

    expect(BMIService.getCategory(60)).equal(BMIService.Category.OBESE_CLASS_6);
    expect(BMIService.getCategory(70)).equal(BMIService.Category.OBESE_CLASS_6);
});

it('check getDescription', () => {
    var indexes = [ 10, 14, 15.99, 16, 18.49, 18.50, 24.99, 25, 29.99, 30, 34.99, 35, 
                    39.99, 35, 39.99, 40, 44.99, 45, 49.99, 50, 59.99, 60, 70];

    indexes.forEach(function(i) {
        expect(BMIService.getDescription(i)).equal(BMIService.getCategory(i).description);
    });
});
