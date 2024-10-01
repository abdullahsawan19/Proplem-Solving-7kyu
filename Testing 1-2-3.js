function number(lines) {
  return lines.map((line, index) => `${index + 1}: ${line}`);
}



var number=function(array){
    if (array.length == 0) return [];

    for (let i=0; i<array.length; ++i)
        array[i] = (i+1) + ': ' + array[i];
    return array;
}



var number=function(array){
    let newArr = [];
    array.forEach(function(item, i){
    newArr.push((i+1)+': '+item);
    });
    return newArr;
}






console.log(number([]))
console.log(number(["a", "b", "c"])) //["1: a", "2: b", "3: c"]


