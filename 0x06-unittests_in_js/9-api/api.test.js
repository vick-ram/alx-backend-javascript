const assert = require('assert');
const request = require('request');

const url = "http://localhost:7865"

describe('Index page', () => {
    it('Correct status code for number id', (done) => {
        request(url, (error, response, body) => {
            assert.equal(response.statusCode, 200);
            done();
        });
    });
});