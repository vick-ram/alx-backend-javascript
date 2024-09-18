function calculateNumber(type ,a, b) {
    switch(type) {
        case "SUM":
            return (Math.round(a) + Math.round(b));
        case "SUBTRACT":
            return (Math.round(a) - Math.round(b));
        case "DIVIDE":
            if (Math.round(b) === 0) {
                return "Error";
            }
            let ans = Math.round(a) / Math.round(b);
            return ans;
    }
}

module.exports = calculateNumber;