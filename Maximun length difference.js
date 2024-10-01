function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;

  let max1 = Math.max(...a1.map((s) => s.length));
  let min1 = Math.min(...a1.map((s) => s.length));
  let max2 = Math.max(...a2.map((s) => s.length));
  let min2 = Math.min(...a2.map((s) => s.length));
  let jjj = Math.abs(max1 - min2);
  let fff = Math.abs(max2 - min1);
  return Math.max(jjj, fff);
}
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;

  const length1 = a1.map((str) => str.length);
  const length2 = a2.map((str) => str.length);

  return Math.max(
    Math.max(...length1) - Math.min(...length2),
    Math.max(...length2) - Math.min(...length1)
  );
}
console.log(
  mxdiflg(
    [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ],
    ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  )
);
