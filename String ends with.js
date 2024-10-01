function solution(str, ending){
    if(str.endsWith(ending)){
        return true
    }else {
        return false
    }
}



function solution(str, ending){
    return str.endsWith(ending);
}


function solution(str, ending){
    var l = ending.length;
    var str = str.slice(-l);
    return str.match(ending) ? true : false;
}



console.log(solution('abc', 'bc'));// true
console.log(solution('abc', 'd')); // false