function stray(numbers) {
    let num = numbers.sort((a,b) => a-b);
    if (num[0] == num[1]){
        return num[num.length-1];
    }else{
        return num[0];
    }
}



const stray = nums => nums.reduce((a, b) => a ^ b);




console.log(stray([1, 1, 2])); //2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); //3
console.log(stray([13,13,13,5])); //5