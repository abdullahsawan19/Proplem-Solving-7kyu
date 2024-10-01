function capitalize(s) {
  const even = s
    .split("")
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char))
    .join("");
  const odd = s
    .split("")
    .map((char, index) => (index % 2 !== 0 ? char.toUpperCase() : char))
    .join("");
  return [even, odd];
}

capitalize = (s) => [
  [...s].map((l, i) => (i % 2 ? l.toLowerCase() : l.toUpperCase())).join(""),
  [...s].map((l, i) => (i % 2 ? l.toUpperCase() : l.toLowerCase())).join(""),
];

function capitalize(s) {
  let odd = s.split("");
  let even = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      even[i] = even[i].toUpperCase();
    } else {
      odd[i] = odd[i].toUpperCase();
    }
  }
  return [even.join(""), odd.join("")];
}
console.log(capitalize("sawan")); //[SaWaN,sAwAn]
