var assert = require('assert');


var { add, mul, div, sub } = require('../app/calculator.js');


describe('Calculator Operations', function() {
    describe('Addition', function() {
        it('should return 7 when adding 5 and 2', function() {
            assert.equal(add(5, 2), 7);
        });
        it('should fail when adding 5 and 2 expecting 8', function() {
            assert.notEqual(add(5, 2), 8);
        });
    });

    describe('Subtraction', function() {
        it('should return 3 when subtracting 5 and 2', function() {
            assert.equal(sub(5, 2), 3);
        });
        it('should fail when multiplying 5 and 2 expecting 3', function() {
            assert.notEqual(sub(5, 2), 5);
        });
    });

    describe('Multiplication', function() {
        it('should return 10 when multiplying 5 by 2', function() {
            assert.equal(mul(5, 2), 10);
        });
        it('should fail when multiplying 5 by 2 expecting 12', function() {
            assert.notEqual(mul(5, 2), 12);
        });
    });

    describe('Division', function() {
        it('should return 5 when dividing 10 by 2', function() {
            assert.equal(div(10, 2), 5);
        });
        it('should fail when dividing 10 by 2 expecting 2', function() {
            assert.notEqual(div(10, 2), 2);
        });
    });
});
