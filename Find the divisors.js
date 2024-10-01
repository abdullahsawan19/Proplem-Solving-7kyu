function divisors(integer) {
    const newArray = [];
    for (let i = 2 ; i < integer ; i++){
    if (integer % i === 0) {
        newArray.push(i)
    } 
    }
    if (newArray.length === 0) {
        return '' + integer + ' is prime'
    }
    return newArray;
}






function divisors(integer) {
	var divs = [];
    for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
        divs.push(i);
    }
}
    return divs.length ? divs : integer + ' is prime';
};





function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) 
        if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
};






console.log(divisors(12)); //[2,3,4,6]
console.log(divisors(25)); //[5]
console.log(divisors(13)); // " 13 is prime "