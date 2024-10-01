function oddOrEven(array) {
    let sum = 0;
    for (let i = 0 ; i < array.length ; i++){
        sum += array[i];
    }
    if (sum % 2 == 0){
        return "even"
    }else{
        return "odd"
    }
}



function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}




console.log(oddOrEven([0, -1, -5]));