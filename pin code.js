function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}






function validatePIN (pin) {
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
    if(isCorrectLength && hasOnlyNumbers){
    return true;
    }
    return false;
}



/* for my future referencing,

  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/ 

const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin);


console.log(validatePIN("1234")); //true
console.log(validatePIN("12345")); //false
console.log(validatePIN("a234")); //false