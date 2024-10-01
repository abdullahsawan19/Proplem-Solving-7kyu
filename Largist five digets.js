function solution(digits) {
  let answer = 0;

  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5);
    if (Number(number) > answer) {
      answer = Number(number);
    }
  }
  return number;
}

function solution(digits) {
  let s = [];
  for (var i = 0; i < digits.length - 4; i++) {
    s.push(digits.substr(i, 5));
  }
  return s;
}

console.log(solution(1234567890)); //67890
