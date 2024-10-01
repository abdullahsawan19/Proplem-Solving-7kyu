function minMax(arr){
    let reaenge = arr.sort((a, b) => a - b);
    for ( let i = 0 ; i < arr.length ;i++){
        if (reaenge.length > 1){
            return [reaenge[0],reaenge[reaenge.length - 1]];
        }
        else if (arr[i] === arr[i]){
            return [arr[i],arr[i]];
        }
    }
}

function minMax(arr){
    let reaenge = arr.sort((a, b) => a - b);
            return [reaenge[0],reaenge[reaenge.length - 1]];
}


function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}


console.log(minMax([1,2,3,4,5])); //[1,5]
console.log(minMax([2334454,5])); //[5,2334454]
console.log(minMax([1])); //[1,1]