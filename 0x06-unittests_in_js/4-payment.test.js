const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const assert = require('assert');


describe('sendPaymentRequestToApi', () => {
    it('should use stubbed calculateNumber', () => {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        sendPaymentRequestToApi(100, 20);
        assert.equal(stub.getCall(0).args[0], 'SUM');
        assert.equal(stub.getCall(0).args[1], 100);
        assert.equal(stub.getCall(0).args[2], 20);

        const spy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(spy, 'The total is: 10');
        spy.restore();
        stub.restore();
    });
});
