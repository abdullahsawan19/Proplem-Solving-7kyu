function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function inAscOrder(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

const inAscOrder = (arr) => arr.join("") === arr.sort((a, b) => a - b).join("");

console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])); //false
console.log(inAscOrder([1, 2, 3, 4, 5])); //true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); //false
