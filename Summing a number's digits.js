function sumDigits(number) {
  if (number < 0) {
    return sumDigits(-number);
  }
  let sum = 0;
  let re = number.toString().split("");
  for (let i = 0; i < re.length; i++) {
    sum += parseInt(re[i]);
  }
  return sum;
}

function sumDigits(number) {
  let result = 0;

  let arr = Math.abs(number).toString().split("");

  arr.forEach((num) => {
    result += parseInt(num);
  });

  return result;
}

function sumDigits(number) {
  let num = Math.abs(number);
  let str = String(num);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum;
}
console.log(sumDigits(10)); //1
console.log(sumDigits(99)); //18
console.log(sumDigits(-23)); //5
