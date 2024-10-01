function solve(s) {
  let lowerC = 0;
  let upperC = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      upperC++;
    } else {
      lowerC++;
    }
  }
  return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase();
}

function solve(s) {
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) c++;
  }
  return c > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}

const solve = (s) =>
  s.replace(/[A-Z]/g, "").length < s.length / 2
    ? s.toUpperCase()
    : s.toLowerCase();

function solve(s) {
  const upperCount = [...s].filter((c) => c === c.toUpperCase()).length;
  const lowerCount = [...s].filter((c) => c === c.toLowerCase()).length;

  if (upperCount > lowerCount) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}
console.log(solve("CODe"));
console.log(solve("coDe"));
console.log(solve("coDE"));
