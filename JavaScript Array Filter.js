function getEvenNumbers(numbersArray) {
  let evenNumbers = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      evenNumbers.push(numbersArray[i]);
    }
  }
  return evenNumbers;
}

function getEvenNumbers(numbersArray) {
  return numbersArray.filter(function (n) {
    return n % 2 == 0;
  });
}

console.log(getEvenNumbers([2, 4, 6, 7])); //[2,4,6]
console.log(getEvenNumbers([2, 4, 6, 71])); //[2,4,6]
console.log(getEvenNumbers([2, 44, 6, 9])); //[2,44,6]
