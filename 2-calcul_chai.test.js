const calculateNumber = require("./2-calcul_chai");
const expect = require('chai').expect

, test1 = calculateNumber('SUM', 1.4, 4.5)
, test2 = calculateNumber('SUBTRACT', 1.4, 4.5)
, test3 = calculateNumber('DIVIDE', 1.4, 4.5)
, test4 = calculateNumber('DIVIDE', 1.4, 0);

describe('operations', () => {
    it('adds two numbers', () => {
        expect(test1).to.equal(6);
    });
    it('subtracts two numbers', () => {
        expect(test2).to.equal(-4);
    });
    it('divides two numbers', () => {
        expect(test3).to.equal(0.2);
    });
    it('divides two numbers and throws an error', () => {
        expect(test4).to.equal('Error');
    });
});