function angle(n) {
  return (n - 2) * 180;
}

let angle = (n) => (n - 2) * 180;

let angle = (n) => n * 180 - 360;

function angle(n) {
  var total = 0;
  for (var i = 3; i <= n; i++) {
    total += 180;
  }
  return total;
}

console.log(angle(3)); //180
console.log(angle(4)); //360
