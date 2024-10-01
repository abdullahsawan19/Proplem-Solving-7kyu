function removeSmallest(numbers) {
    numbers = numbers.slice(0);
    let n = Math.min(...numbers);
    numbers.splice(numbers.indexOf(n), 1);
    return numbers
}


function removeSmallest(numbers) {
    let copy = [...numbers]
    let smallest = Math.min(...numbers);
    let smallestIdx = numbers.indexOf(smallest)
    copy.splice(smallestIdx, 1)
    return copy
}




function removeSmallest(numbers) {
    let array = [];
    const index = numbers.indexOf(Math.min(...numbers))
    for(let i = 0; i < numbers.length; i++){
        if ( i !== index){
            array.push(numbers[i])}   
    }
    return array;
} 




const removeSmallest = arr => arr.filter((el, i) => i !== arr.indexOf(Math.min(...arr)))





console.log(removeSmallest([1,2,3,4,5])); //[2,3,4,5]
console.log(removeSmallest([5,3,2,1,4])); //[5,3,2,4]
console.log(removeSmallest([2,2,1,2,1])); //[2,2,2,1]