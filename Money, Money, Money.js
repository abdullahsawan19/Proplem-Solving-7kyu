function calculateYears(p, i, t, d) {
    let years = 0;
    while (p < d) {
        var p = ((p * i) - ((p * i) * t)) + p;
        years++;
    }
    return years;
}



function calculateYears(principal, interest, tax, desired) {
    return Math.ceil(
        Math.log(desired / principal) / 
        Math.log(1 + interest * (1 - tax))
    );
}


console.log(calculateYears(1000.00,0.05,0.18,1100.00))