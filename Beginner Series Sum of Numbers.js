function getSum(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }







  function getSum(a,b)
  {
    return (Math.abs(a - b) + 1) * (a+b) / 2;
  }                     





  const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }




  function GetSum( a,b )
  {
      if(a===b){
        return a;
      }
      var result = 0;
      var x = a, y = b;
      if(a > b) {
        x = b, y = a;
      }
      for(var i = x; i <=y; i++ ) {
        result += i;
      }
      return result;
  }




console.log(getSum(1,0));//1
console.log(getSum(1,2));//3
console.log(getSum(1,1));//1
console.log(getSum(-1,2));//2