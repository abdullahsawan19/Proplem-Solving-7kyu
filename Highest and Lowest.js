function highAndLow(numbers){
let arr = numbers.split(' ').sort((a,b) => b-a);
let result = `${arr[0]} ${arr[arr.length-1]}`
return result;
}



function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers){
    numbers = numbers.split(' ').sort((a, b)=> Number(a)-Number(b))
    return [numbers[numbers.length-1], numbers[0]].join(' ')
  }
console.log(highAndLow("1 2 -3 4 5"));