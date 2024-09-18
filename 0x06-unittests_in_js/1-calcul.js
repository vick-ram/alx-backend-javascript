function calculateNumber(type ,a, b) {
    let roundedA = Math.round(a);
    let roundedB = Math.round(b);
    switch(type) {
        case "SUM":
            return (roundedA + roundedB);
        case "SUBTRACT":
            return (roundedA - roundedB);
        case "DIVIDE":
            if (Math.round(b) === 0) {
                return "Error";
            }
            let ans = roundedA / roundedB;
            return ans;
    }
}

module.exports = calculateNumber;