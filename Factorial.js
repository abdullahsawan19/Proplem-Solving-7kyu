function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(3)); //6
