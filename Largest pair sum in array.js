function largestPairSum(numbers) {
  let sorting = numbers.sort((a, b) => b - a);
  let largestPair = sorting[0] + sorting[1];
  return largestPair;
}
function largestPairSum(numbers) {
  var [a, b] = numbers.sort((a, b) => b - a);
  return a + b;
}

console.log(largestPairSum([10, 14, 2, 23, 19])); //42
console.log(largestPairSum([99, 2, 2, 23, 19])); //122
