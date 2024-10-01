var isAnagram = function (test, original) {
  const theTest = test.toLowerCase().split("").sort().join("");
  const theOriginal = original.toLowerCase().split("").sort().join("");
  return theTest === theOriginal;
};

var isAnagram = function (test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ==
    original.toLowerCase().split("").sort().join("")
  );
};

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("Buckethead", "DeathCubeK"));
console.log(isAnagram("sawan", "nawas"));
