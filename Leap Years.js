function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function isLeapYear(y) {
  if (y % 400 == 0) return true;
  if (y % 100 == 0) return false;
  if (y % 4 == 0) return true;
  return false;
}

function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

// 1600 ≤ year ≤ 4000

console.log(isLeapYear(2015)); //false
console.log(isLeapYear(2100)); //false
console.log(isLeapYear(2000)); //true
console.log(isLeapYear(2020)); //true
