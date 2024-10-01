var capitals = function (word) {
  let newArray = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) {
      newArray.push(i);
    }
  }
  return newArray;
};

var capitals = function (word) {
  return word
    .split("")
    .map(function (l, i) {
      if (l.toUpperCase() === l) return i;
    })
    .filter(function (i) {
      return i != null;
    });
};

const capitals = (word) => {
  return word.match(/[A-Z]/g).map((x) => {
    return word.indexOf(x);
  });
};

console.log(capitals("CodEWaRs")); //[0,3,4,6]
