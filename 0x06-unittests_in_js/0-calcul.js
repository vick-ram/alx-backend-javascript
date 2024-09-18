function calculateNumber(a, b) {
    let roundA = Math.round(a);
    let roundB = Math.round(b);

    return roundA + roundB;
}

module.exports = calculateNumber;
