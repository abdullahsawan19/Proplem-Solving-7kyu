function sumTwoSmallestNumbers(numbers) {  
    let newArray = []
    for( let i = 0 ; i < numbers.length ; i++){
        if ( numbers[i] > 0 ){
            newArray.push(numbers[i])
        }
    }
    let sortedArray = newArray.sort((a,b) => a - b);
    let final = +sortedArray.slice(0,1) + +sortedArray.slice(1,2)
    return final;
}


const sumTwoSmallestNumbers = numbers =>
numbers.sort((x, y) => x - y)
.slice(0, 2).reduce((x, y) => x + y);



function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function (a, b) { 
        return a - b;
    });
        return numbers[0] + numbers[1];
};





console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])) // 7