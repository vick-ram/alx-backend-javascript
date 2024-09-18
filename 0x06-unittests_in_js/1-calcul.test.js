const calculateNumber = require("./1-calcul.js");
const assert = require('assert');

describe('add', function() {
    it('adds two numbers', function() {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('subtracts two numbers', function() {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('divides two numbers', function() {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('divides two numbers with an error', function() {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});
