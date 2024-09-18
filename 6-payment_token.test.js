const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');


describe('getPaymentTokenFromAPI', () => {
    it('Tests for promises', done => {
        getPaymentTokenFromAPI(true)
        .then(response => {
            assert.equal(response.data, 'Successful response from the API');
            done();
        });
    });
});