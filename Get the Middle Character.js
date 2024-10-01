function getMiddle(string) {
  var middleIndex = string.length / 2;
  if (string.length % 2 == 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return string.charAt(middleIndex);
  }
}



function getMiddle(s)
{
    return s.length % 2 == 0 ? s.charAt((s.length-1) / 2) + s.charAt((s.length+1) / 2) : s.charAt(s.length / 2);
}


function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}



console.log(getMiddle("tesm"));//es
console.log(getMiddle("midndle"));//d
console.log(getMiddle("A"));//A