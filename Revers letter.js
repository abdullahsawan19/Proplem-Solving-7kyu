function reverseLetter(str) {
  return str
    .replaceAll(/[_\W+\d]/gi, "")
    .split("")
    .reverse()
    .join("");
}

function reverseLetter(str) {
  return str
    .replace(/[^a-z]/gi, "")
    .split("")
    .reverse()
    .join("");
}
function reverseLetter(str) {
  return str.match(/[a-z]/g).reverse().join("");
}

console.log(reverseLetter("naw*$a9s_")); //sawan
console.log(reverseLetter("do+og")); //good
