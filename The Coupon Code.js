function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  let currtDate = Date.parse(currentDate);
  let expiDate = Date.parse(expirationDate);
  if (enteredCode !== correctCode || currtDate > expiDate) {
    return false;
  } else {
    return true;
  }
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) >= Date.parse(currentDate)
  );
}


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
  }

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")); //true
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")); //false
console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014")); //false
