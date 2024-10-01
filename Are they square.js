var isSquare = function(arr){
    for (var i = 0; i < arr.length; i++) {
        if(!Number.isInteger(Math.sqrt(arr[i]))) {
        return false;
        }
    }
    return arr.length ? true : undefined;
}




var isSquare = function(arr) {
    if (arr.length)
    return arr.every(x=>Math.floor(x**0.5)**2 == x);
}




var isSquare = function(arr){
    if (arr && arr.length) {
        return arr.every(n => Number.isInteger(Math.sqrt(n)));
    }
}

console.log(isSquare([1, 4, 9, 16]));//true
console.log(isSquare([3, 4, 7, 9]));//false
console.log(isSquare([])); //None