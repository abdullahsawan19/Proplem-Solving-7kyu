const binaryArrayToNumber = arr => {
    let num = arr.join("");
    return parseInt(num, 2);
};






const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);







function binaryArrayToNumber(arr) {
    return arr.reduce( (a, b) => a << 1 | b );
}






console.log(binaryArrayToNumber([0,0,0,1]))