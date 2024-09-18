const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('add', function() {
    it('adds two numbers', function() {
      assert.equal(calculateNumber(1, 2.4), 3);
    });
  });