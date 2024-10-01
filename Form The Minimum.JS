function minValue(values) {
  const sorted = values.sort((a, b) => a - b);
  const Final = [...new Set(sorted)].join("");
  return Number(Final);
}

function minValue(values) {
  let arr = Array.from(new Set(values));
  return parseInt(arr.sort().join(""));
}

function minValue(values) {
  const n = values
    .filter((e, i, arr) => arr.indexOf(e) === i)
    .sort()
    .join("");
  return Number(n);
}
console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7])); //134679
