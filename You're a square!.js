var isSquare = function(n){
    if(n < 0) {
        return false;
    }else if (n == 0){
        return true;
    }else if (n % Math.sqrt(n) == 0) {
        return true;
    }else{
        return false;
    }
}


function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}



var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
}



console.log(isSquare(0)); //false
console.log(isSquare(25)); //true
console.log(isSquare(3)); //false






