function maxMultiple(divisor, bound) {
  let max = Math.floor(bound / divisor) * divisor;
  return max;
}

function maxMultiple(divisor, bound) {
  var max = 0;
  for (let i = divisor; i <= bound; i++) {
    if (i % divisor == 0 && i > max) {
      max = i;
    }
  }
  return max;
}

function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
} // dupa

function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

console.log(7 - (7 % 2));
// console.log(maxMultiple(2, 7)); //6
// console.log(maxMultiple(10, 50)); //50
