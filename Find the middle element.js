function gimme(triplet) {
    const sortedTriplet = [...triplet].sort((a, b) => a - b);
    const middleValue = sortedTriplet[1];
    return triplet.indexOf(middleValue);
}


const gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};



function gimme(triplet) {
    return triplet.indexOf(triplet.concat()
    .sort(function(a, b) { return a - b })[1])
}



var gimme = function (inputArray) {
    let index = 0;
    let max = Math.max(...inputArray);
    let min = Math.min(...inputArray);
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] !== max && inputArray[i] !== min){        
        index = i;
    }
    }
    return index;
};





var gimme = function (inputArray) {
    if ((inputArray[0] < inputArray[1] && inputArray[0] > inputArray[2])
        || (inputArray[0] > inputArray[1] && inputArray[0] < inputArray[2]))
        return 0;
    if ((inputArray[1] < inputArray[0] && inputArray[1] > inputArray[2])
        || (inputArray[1] > inputArray[0] && inputArray[1] < inputArray[2]))
        return 1;
    if ((inputArray[2] < inputArray[0] && inputArray[2] > inputArray[1])
        || (inputArray[2] > inputArray[0] && inputArray[2] < inputArray[1]))
        return 2;
};


console.log(gimme([2, 3, 1])) //0
console.log(gimme([3,31,-12])) //0