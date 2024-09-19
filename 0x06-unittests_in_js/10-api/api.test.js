const request = require('request');
const assert = require('assert');

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      assert.equal(response.statusCode, 200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      assert.equal(body, 'Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      assert.equal(response.statusCode, 200);
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      assert.equal(response.statusCode, 404);
      done();
    });
  });
});

describe('/login endpoint', () => {
  it('Correct status code and message?', (done) => {
    request.post(
      'http://localhost:7865/login',
      { json: { userName: 'Betty' } },
      (error, response, body) => {
        assert.equal(response.statusCode, 200);
        assert.equal(body, 'Welcome Betty');
        done();
      }
    );
  });
});

describe('/available_payments endpoint', () => {
  it('Correct status code and response?', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      assert.equal(response.statusCode, 200);
      assert.deepEqual(JSON.parse(body), {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});