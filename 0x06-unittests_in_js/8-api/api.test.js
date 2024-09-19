const assert = require('assert');
const request = require('request');

const url = "http://localhost:7865"

describe('Index page', () => {
    it('Correct status code', (done) => {
        request(url, (error, response, body) => {
            assert.equal(response.statusCode, 200);
            done();
        });
    });
    it('Correct result?', (done) => {
        request(url, (error, response, body) => {
            assert.equal(body, 'Welcome to the payment system');
            done();
        });
    });
});