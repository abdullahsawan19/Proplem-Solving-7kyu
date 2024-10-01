function addBinary(a,b) {
    return (a+b).toString(2);
}





function addBinary(a,b){
    var sum = a + b, binary = '';
    while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
    }
    return binary;
}





console.log(addBinary(1,1))//10
console.log(addBinary(5,9))//1110