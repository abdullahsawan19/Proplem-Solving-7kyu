function roundToNext5(n) {
  if (n % 5 == 0) {
    return Math.floor(n / 5) * 5;
  } else {
    return Math.floor(n / 5) * 5 + 5;
  }
}

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

function roundToNext5(n) {
  while (n % 5 !== 0) n++;
  return n;
}

function roundToNext5(n) {
  if ((n + 1) % 5 == 0) {
    return n + 1;
  } else if ((n + 2) % 5 == 0) {
    return n + 2;
  } else if ((n + 3) % 5 == 0) {
    return n + 3;
  } else if ((n + 4) % 5 == 0) {
    return n + 4;
  } else if (n % 5 == 0) {
    return n;
  }
}

function roundToNext5(n) {
  if (n % 5 == 0 || n == 0) {
    return n;
  } else {
    return roundToNext5(n + 1);
  }
}
console.log(roundToNext5(0)); //0
console.log(roundToNext5(2)); //5
console.log(roundToNext5(3)); //5
console.log(roundToNext5(12)); //15
console.log(roundToNext5(21)); //25
console.log(roundToNext5(30)); //30
console.log(roundToNext5(-2)); //0
