function wordsToMarks(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == "a") {
      sum += 1;
    } else if (string.charAt(i) == "b") {
      sum += 2;
    } else if (string.charAt(i) == "c") {
      sum += 3;
    } else if (string.charAt(i) == "d") {
      sum += 4;
    } else if (string.charAt(i) == "e") {
      sum += 5;
    } else if (string.charAt(i) == "f") {
      sum += 6;
    } else if (string.charAt(i) == "g") {
      sum += 7;
    } else if (string.charAt(i) == "h") {
      sum += 8;
    } else if (string.charAt(i) == "i") {
      sum += 9;
    } else if (string.charAt(i) == "j") {
      sum += 10;
    } else if (string.charAt(i) == "k") {
      sum += 11;
    } else if (string.charAt(i) == "l") {
      sum += 12;
    } else if (string.charAt(i) == "m") {
      sum += 13;
    } else if (string.charAt(i) == "n") {
      sum += 14;
    } else if (string.charAt(i) == "o") {
      sum += 15;
    } else if (string.charAt(i) == "p") {
      sum += 16;
    } else if (string.charAt(i) == "q") {
      sum += 17;
    } else if (string.charAt(i) == "r") {
      sum += 18;
    } else if (string.charAt(i) == "s") {
      sum += 19;
    } else if (string.charAt(i) == "t") {
      sum += 20;
    } else if (string.charAt(i) == "u") {
      sum += 21;
    } else if (string.charAt(i) == "v") {
      sum += 22;
    } else if (string.charAt(i) == "w") {
      sum += 23;
    } else if (string.charAt(i) == "x") {
      sum += 24;
    } else if (string.charAt(i) == "y") {
      sum += 25;
    } else if (string.charAt(i) == "z") {
      sum += 26;
    }
  }

  return sum;
}

function wordsToMarks(str) {
  var sum = 0;
  for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) - 96;
  return sum;
}

console.log(wordsToMarks("attitude")); //100
console.log(wordsToMarks("attitude")); //75
