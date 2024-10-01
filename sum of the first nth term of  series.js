function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
}



function SeriesSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += 1 / (1 + 3 * i);
    }
    return sum.toFixed(2);
}


console.log(SeriesSum(1)) // "1.00"
console.log(SeriesSum(2)) // "1.25"
console.log(SeriesSum(5)) // "1.57"