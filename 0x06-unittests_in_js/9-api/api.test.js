const assert = require('assert');
const request = require('request');

const url = "http://localhost:7865"

describe('Index page', () => {
    it('Correct status code?', (done) => {
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

describe('Cart page', () => {
    it('Correct status code when :id is a number?', (done) => {
      request(`${url}/cart/12`, (error, response, body) => {
        assert.equal(response.statusCode, 200);
        done();
      });
    })
    it('Correct response for cat id', (done) => {
      request(`${url}/cart/12`, (error, response, body) => {
        assert.equal(body, 'Payment methods for cart 12');
        done();
      });
    });
  
    it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
      request(`${url}/cart/hello`, (error, response, body) => {
        assert.equal(response.statusCode, 404);
        done();
      });
    });
});