function XO(str) {
    var str = str.toLowerCase().split("");
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "x"){
            x += 1;
        }else if (str[i] == "o"){
            o += 1;
        }
    }
    return x == o;
}




function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}




const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}




function XO(str) {
    return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length
}

console.log(XO("ooxx")); //true
console.log(XO("xooxx")); //false
console.log(XO("ooxXm")); //true
