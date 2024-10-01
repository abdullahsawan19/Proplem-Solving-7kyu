// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  const rearange = ages.sort((a, b) => a - b);
  return rearange.slice(-2);
}

function twoOldestAges(ages) {
  let newArr = ages.sort((a, b) => b - a);
  return [newArr[0], newArr[1]].reverse();
}
console.log(twoOldestAges([1, 2, 10, 8])); //[8, 10]
console.log(twoOldestAges([1, 5, 87, 45, 8, 8])); //[45, 87]
console.log(twoOldestAges([1, 3, 10, 0])); //[3, 10]
