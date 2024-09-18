const Utils = require('./utils');


function sendPaymentRequestToApi(totalAmount, totalShipping) {
    let calculateNumber = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${calculateNumber}`);
}

module.exports = sendPaymentRequestToApi;