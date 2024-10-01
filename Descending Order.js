function descendingOrder(n){
    let a = n.toString().split("").sort(function(a, b){return b-a});
    let b = a.join("");
    return a ;
}




function descendingOrder(n){
    return Number(n.toString().split("").sort(function(a, b){return b-a}).join(""))
}


function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}



function descendingOrder(n) {
    return parseInt(n.toString().split("").sort().reverse().join(""));
}



console.log(descendingOrder(123456789))
