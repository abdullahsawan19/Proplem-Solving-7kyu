function checkExam(array1, array2) {
  let degree = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      degree += 4;
    } else if (array2[i] === "") {
      degree += 0;
    } else {
      degree -= 1;
    }
  }
  if (degree > 0) {
    return degree;
  } else {
    return 0;
  }
}

function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === array1[i]) {
      score += 4;
    } else if (array2[i] === "") {
      score += 0;
    } else {
      score -= 1;
    }
  }
  return Math.max(score, 0);
}

checkExam = (x1, y2) =>
  (x1 = y2.reduce((s, e, i) => s + (e === x1[i] ? 4 : e === "" ? 0 : -1), 0)) >
  0
    ? x1
    : 0;

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); //6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); //7
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); //0
