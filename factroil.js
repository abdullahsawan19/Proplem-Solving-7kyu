function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

const factorial = (n) => (n ? factorial(n - 1) * n : 1);

function factorial(n) {
  let answer = 1;

  while (n > 0) {
    answer *= n;
    n--;
  }

  return answer;
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(3)); //6
console.log(factorial(4)); //24
