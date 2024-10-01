function rowWeights(array) {
  let twamA = 0;
  let twamB = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      twamA += array[i];
    } else {
      twamB += array[i];
    }
  }
  return [twamA, twamB];
}

function rowWeights(array) {
  let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
  let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);

  return [t1, t2];
}

rowWeights = (arr) => arr.reduce((a, b, i) => ((a[i % 2] += b), a), [0, 0]);

console.log(rowWeights([80])); //[80,0]
console.log(rowWeights([100, 50])); //[100,50]
console.log(rowWeights([50, 60, 70, 80])); //[120,140]
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96])); //[211,164]
