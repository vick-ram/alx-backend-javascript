const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('add', function() {
    it('adds two numbers', function() {
      assert.equal(calculateNumber(1, 2.4), 3);
    });
    it('adds two numbers', function() {
      assert.equal(calculateNumber(1, 3), 4);
    });
    it('adds two numbers', function() {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('adds two numbers', function() {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('adds two numbers', function() {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
