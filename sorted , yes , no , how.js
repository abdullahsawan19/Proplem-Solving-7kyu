function isSortedAndHow(array) {
  let S = array.join("");

  if (S === array.sort((a, b) => a - b).join("")) {
    return "yes, ascending";
  } else if (S === array.sort((a, b) => b - a).join("")) {
    return "yes, descending";
  } else {
    return "no";
  }
}

function isSortedAndHow(array) {
  if ([...array].sort((a, b) => a - b).join`` === array.join``)
    return "yes, ascending";
  if ([...array].sort((a, b) => b - a).join`` === array.join``)
    return "yes, descending";
  return "no";
}

function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? "yes, ascending"
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? "yes, descending"
    : "no";
}
console.log(isSortedAndHow([1, 2])); //'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])); //'yes, descending'
console.log(isSortedAndHow([4, 2, 30])); //no
